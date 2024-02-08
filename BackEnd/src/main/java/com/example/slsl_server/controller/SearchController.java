package com.example.slsl_server.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.slsl_server.model.Gwangju;
import com.example.slsl_server.model.Kor;
import com.example.slsl_server.model.Korea;
import com.example.slsl_server.model.Pay;
import com.example.slsl_server.model.Seoul;
import com.example.slsl_server.repository.GwangjuRepository;
import com.example.slsl_server.repository.KoreaRepository;
import com.example.slsl_server.repository.PayRepository;
import com.example.slsl_server.repository.SeoulRepository;

@RestController
@CrossOrigin(origins = "*")
public class SearchController {
    @Autowired
    SeoulRepository seoulRepository;
    @Autowired
    GwangjuRepository gwangjuRepository;
    @Autowired
    KoreaRepository koreaRepository;
    @Autowired
    PayRepository payRepository;

    @GetMapping("/api/{location}")
    public List<?> selectLocation(
        @PathVariable String location,
        @RequestParam("firstDate") String firstDate,
        @RequestParam("secondDate") String secondDate
    ) {
        if (location.equals("seoul")) {
            List<Seoul> first = seoulRepository.findByDate(LocalDate.parse(firstDate));
            List<Seoul> second = seoulRepository.findByDate(LocalDate.parse(secondDate));
            List<Seoul> result = new ArrayList<>();
            result.addAll(first);
            result.addAll(second);

            return result;
        }
        else if (location.equals("gwangju")) {
            List<Gwangju> first = gwangjuRepository.findByDate(LocalDate.parse(firstDate));
            List<Gwangju> second = gwangjuRepository.findByDate(LocalDate.parse(secondDate));
            List<Gwangju> result = new ArrayList<>();
            result.addAll(first);
            result.addAll(second);
        
            return result;
        }
        else if (location.equals("korea")) {
            List<Korea> first = koreaRepository.findByDate(LocalDate.parse(firstDate));
            List<Korea> second = koreaRepository.findByDate(LocalDate.parse(secondDate));
            List<Korea> result = new ArrayList<>();
            result.addAll(first);
            result.addAll(second);

            return result;
        }
        else {
            List<Korea> firstKorea = koreaRepository.findByDate(LocalDate.parse(firstDate));
            List<Korea> secondKorea = koreaRepository.findByDate(LocalDate.parse(secondDate));
            List<Seoul> firstSeoul = seoulRepository.findByDate(LocalDate.parse(firstDate));
            List<Seoul> secondSeoul = seoulRepository.findByDate(LocalDate.parse(secondDate));
            List<Gwangju> firstGwangju = gwangjuRepository.findByDate(LocalDate.parse(firstDate));
            List<Gwangju> secondGwangju = gwangjuRepository.findByDate(LocalDate.parse(secondDate));

            List<Kor> result = new ArrayList<>();
            result.addAll(firstKorea);
            result.addAll(secondKorea);
            result.addAll(firstSeoul);
            result.addAll(secondSeoul);
            result.addAll(firstGwangju);
            result.addAll(secondGwangju);

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
