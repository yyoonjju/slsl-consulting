package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.Power;

@Repository
public interface PowerRepository extends JpaRepository<Power, Integer>{
      List<Power> findByLocAndDateBetween(String loc, LocalDate firstDate, LocalDate secondDate);
}