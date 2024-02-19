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

import com.example.slsl_server.model.Power;
import com.example.slsl_server.repository.JejuSmpDataRepository;
import com.example.slsl_server.repository.LandSmpPredictionDataRepository;
import com.example.slsl_server.repository.PayRepository;
import com.example.slsl_server.repository.PowerRepository;

@RestController
// CORS 방지
@CrossOrigin(origins = "*")
public class SearchController {
    @Autowired
    PowerRepository powerRepository;
    @Autowired
    LandSmpPredictionDataRepository landSmpPredictionDataRepository;
    @Autowired
    PayRepository payRepository;
    @Autowired
    JejuSmpDataRepository jejuSmpDataRepository;

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
            List<Map<String,Object>> data = powerRepository.findGroupByDateWithNativeQuery(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
            // 반환할 가공 데이터를 담을 박스 생성
            List<Map<String,Object>> result = new ArrayList<>();
            // Math, Double, String은 발전량 단위를 W -> GW로 변환하고 소수점 2자리로 고정하는 과정
            Double total = Math.round(Double.valueOf(String.valueOf(data.get(0).get("value")))/10000000)/100.0;
            // 박스에 가공 데이터를 담는 과정
            for (int i = 0; i < data.size(); i++) {
                Map<String,Object> dataMap = new HashMap<>();
                dataMap.put("tm", data.get(i).get("tm"));
                dataMap.put("value", Math.round(Double.valueOf(String.valueOf(data.get(i).get("value")))/10000)/100.0);
                // 누적발전량도 붙여서 반환하기 위한 데이터 가공 과정
                if (i == 0) {
                    dataMap.put("total", total);
                }
                else {
                    dataMap.put("total", Math.round((Double.valueOf(String.valueOf(data.get(i).get("value")))/1000000000 + total)*100)/100.0);
                    total = Math.round((Double.valueOf(String.valueOf(data.get(i).get("value")))/1000000000 + total)*100)/100.0;
                }
                result.add(dataMap);
            }

            return result;
        }
        // 정확한 지역을 받을 경우 데이터 가공을 진행할 로직
        // -> 전국 데이터 가공 로직과 거의 동일
        else {
            List<Power> data = powerRepository.findByLOCAndTMBetween(location, LocalDate.parse(firstDate), LocalDate.parse(secondDate));
            List<Map<String,Object>> result = new ArrayList<>();
            Double total = Math.round(data.get(0).getValue()/10000000)/100.0;
            for (int i = 0; i < data.size(); i++) {
                Map<String,Object> dataMap = new HashMap<>();
                dataMap.put("index", data.get(i).getIndex());
                dataMap.put("LOC", data.get(i).getLOC());
                dataMap.put("tm", data.get(i).getTM());
                dataMap.put("value", Math.round(data.get(i).getValue()/10000)/100.0);
                if (i == 0) {
                    dataMap.put("total", total);
                }
                else {
                    dataMap.put("total", Math.round((data.get(i).getValue()/1000000000 + total)*100)/100.0);
                    total = Math.round((data.get(i).getValue()/1000000000 + total)*100)/100.0;
                }
                result.add(dataMap);
            }

            return result;
        }
    };
}
