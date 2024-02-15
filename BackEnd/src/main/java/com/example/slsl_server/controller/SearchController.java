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
@CrossOrigin(origins = "*")
public class SearchController {
    @Autowired
    DummyPowerDataRepository dummyPowerDataRepository;
    @Autowired
    LandSmpPredictionDataRepository landSmpPredictionDataRepository;
    @Autowired
    PayRepository payRepository;

    @GetMapping("/api/{location}")
    public List<Map<String,Object>> selectLocation(
        @PathVariable String location,
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ) {
        if (location.equals("전국")) {
            List<Map<String,Object>> data = dummyPowerDataRepository.findGroupByDateWithNativeQuery(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
            List<Map<String,Object>> result = new ArrayList<>();
            Long total = Math.round(Double.valueOf(String.valueOf(data.get(0).get("value"))));
            for (int i = 0; i < data.size(); i++) {
                Map<String,Object> dataMap = new HashMap<>();
                dataMap.put("date", data.get(i).get("date"));
                dataMap.put("value", Math.round(Double.valueOf(String.valueOf(data.get(i).get("value")))));
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

    @GetMapping("/pay")
    public List<Pay> test(
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ) {
        List<Pay> result = payRepository.findByDateBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));

        return result;
    }
}
