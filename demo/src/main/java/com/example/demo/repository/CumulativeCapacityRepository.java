package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.CumulativeCapacity;

@Repository
public interface CumulativeCapacityRepository extends JpaRepository<CumulativeCapacity,Integer>{
    List<CumulativeCapacity> findByLocAndYear(String loc, int startYear);
    List<CumulativeCapacity> findByLocAndYearBetween(String loc, int startYear, int endYear);
    
} 
