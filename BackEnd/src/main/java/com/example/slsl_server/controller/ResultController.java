package com.example.slsl_server.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.slsl_server.model.JejuSmpData;
import com.example.slsl_server.model.LandSmpData;
import com.example.slsl_server.model.Power;

import com.example.slsl_server.repository.JejuSmpDataRepository;
<<<<<<< HEAD
import com.example.slsl_server.repository.LandSmpDataRepository;
import com.example.slsl_server.repository.PowerRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
=======
>>>>>>> ac158264eece096901718a0f48cecef95343d256


@RestController
public class ResultController {
    @Autowired
    JejuSmpDataRepository jejuSmpDataRepository;

    @Autowired
    LandSmpDataRepository landSmpDataRepository;

    @Autowired
    PowerRepository powerRepository;

    @GetMapping("/findjeju")
    public List<JejuSmpData> findByJeju(
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ){
<<<<<<< HEAD
        return jejuSmpDataRepository.findByDateBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
=======
        return jejuSmpDataRepository.findByDsBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
     
>>>>>>> ac158264eece096901718a0f48cecef95343d256
    }

    @GetMapping("/findland")
    public List<LandSmpData> findByLand(
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ){
        return landSmpDataRepository.findByDateBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
    }

    @GetMapping("/findpower")
    public List<Power> findByPower(
        @PathVariable String location,
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ){
        List <Power> powerdata = powerRepository.findByLocAndDateBetween(location, LocalDate.parse(firstDate), LocalDate.parse(secondDate));
        return powerdata;
    }
   
    
}
