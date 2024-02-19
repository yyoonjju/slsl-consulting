package com.example.slsl_server.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.slsl_server.model.JejuSmpData;
import com.example.slsl_server.repository.JejuSmpDataRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ResultController {
    @Autowired
    JejuSmpDataRepository jejuSmpDataRepository;

    @GetMapping("/findjeju")
    public List<JejuSmpData> findByDS(
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ){
        return jejuSmpDataRepository.findByDateBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
     
    }
}
