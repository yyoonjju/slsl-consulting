package com.example.slsl_server.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.slsl_server.model.DummyPowerData;
import com.example.slsl_server.model.Pay;
import com.example.slsl_server.repository.DummyPowerDataRepository;
import com.example.slsl_server.repository.LandSmpPredictionDataRepository;
import com.example.slsl_server.repository.PayRepository;

@RestController
// CORS 방지
@CrossOrigin(origins = "*")
public class SearchController {
    @Autowired
    DummyPowerDataRepository dummyPowerDataRepository;
    @Autowired
    LandSmpPredictionDataRepository landSmpPredictionDataRepository;
    @Autowired
    PayRepository payRepository;

    // 지역, firstDate, secondDate를 받아서 데이터 가공 후 반환
    @GetMapping("/api/{location}")
    public List<Map<String,Object>> selectLocation(
        @PathVariable String location,
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ) {
        // 지역이 전국일 경우 지역을 통합해서 전국 평균으로 데이터 가공 후 반환
        if (location.equals("전국")) {
            // 데이터 호출
            List<Map<String,Object>> data = dummyPowerDataRepository.findGroupByDateWithNativeQuery(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
            // 반환할 가공 데이터를 담을 박스 생성
            List<Map<String,Object>> result = new ArrayList<>();
            // Math, Double, String 과정은 전국 평균으로 계산 시 type이 소수점 4자리의 double로 출력되기 때문에 정수값으로 반환하기 위해서 진행
            Long total = Math.round(Double.valueOf(String.valueOf(data.get(0).get("value"))));
            // 박스에 가공 데이터를 담는 과정
            for (int i = 0; i < data.size(); i++) {
                Map<String,Object> dataMap = new HashMap<>();
                dataMap.put("date", data.get(i).get("date"));
                dataMap.put("value", Math.round(Double.valueOf(String.valueOf(data.get(i).get("value")))));
                // 누적발전량도 붙여서 반환하기 위한 데이터 가공 과정
                if (i == 0) {
                    dataMap.put("total", total);
                }
                else {
                    dataMap.put("total", Math.round(Double.valueOf(String.valueOf(data.get(i).get("value")))) + total);
                    total = Math.round(Double.valueOf(String.valueOf(data.get(i).get("value")))) + total;
                }
                result.add(dataMap);
            }

            return result;
        }
        // 정확한 지역을 받을 경우 데이터 가공을 진행할 로직
        // -> 전국 데이터 가공 로직과 거의 동일
        else {
            List<DummyPowerData> data = dummyPowerDataRepository.findByLocAndDateBetween(location, LocalDate.parse(firstDate), LocalDate.parse(secondDate));
            List<Map<String,Object>> result = new ArrayList<>();
            Long total = data.get(0).getValue();
            for (int i = 0; i < data.size(); i++) {
                Map<String,Object> dataMap = new HashMap<>();
                dataMap.put("index", data.get(i).getIndex());
                dataMap.put("loc", data.get(i).getLoc());
                dataMap.put("date", data.get(i).getDate());
                dataMap.put("value", data.get(i).getValue());
                if (i == 0) {
                    dataMap.put("total", data.get(i).getValue());
                }
                else {
                    dataMap.put("total", data.get(i).getValue() + total);
                    total = data.get(i).getValue() + total;
                }
                result.add(dataMap);
            }

            return result;
        }
    };

    // firstDate, secondDate를 받아서 데이터 가공 후 반환
    @GetMapping("/pay")
    public List<Pay> test(
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ) {
        List<Pay> result = payRepository.findByDateBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));

        return result;
    }
}
