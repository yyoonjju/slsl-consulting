package com.example.demo.controller;

import java.time.LocalDate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CumulativeCapacity;
import com.example.demo.model.JejuSmpData;
import com.example.demo.model.LandSmpData;
import com.example.demo.model.Power;

import com.example.demo.repository.JejuSmpDataRepository;
import com.example.demo.repository.LandSmpDataRepository;
import com.example.demo.repository.PowerRepository;
import com.example.demo.repository.CumulativeCapacityRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "*")
public class ResultController {
    @Autowired
    JejuSmpDataRepository jejuSmpDataRepository;

    @Autowired
    LandSmpDataRepository landSmpDataRepository;

    @Autowired
    PowerRepository powerRepository;

    @Autowired
    CumulativeCapacityRepository cumulativeCapacityRepository;

    @GetMapping("/findjeju")
    public List<JejuSmpData> findByJeju(
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ){
        return jejuSmpDataRepository.findByDsBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
    }

    @GetMapping("/findland")
    public List<LandSmpData> findByLand(
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ){
        return landSmpDataRepository.findByDsBetween(LocalDate.parse(firstDate), LocalDate.parse(secondDate));
    }

    @GetMapping("/findpower/{selectLocal}")
    public List<Power> findByPower(
        @PathVariable String selectLocal,
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ){
        List <Power> powerdata = powerRepository.findByLocAndTmBetween(selectLocal, LocalDate.parse(firstDate), LocalDate.parse(secondDate));
        
        return powerdata;
    }

    @GetMapping("/findcapacity/{selectLocal}")
    public List<CumulativeCapacity> findBycapacity(
        @PathVariable String selectLocal,
        @RequestParam("startYear") int startYear,
        @RequestParam("endYear") int endYear
    ){
        if(startYear == endYear){
            List <CumulativeCapacity> capacitydata=cumulativeCapacityRepository.findByLocAndYear(selectLocal, (startYear));
            return capacitydata;
        }
        else{
            List <CumulativeCapacity> capacitydata = cumulativeCapacityRepository.findByLocAndYearBetween(selectLocal, (startYear), (endYear));
            return capacitydata;
        }
    }
   
   
    
}
