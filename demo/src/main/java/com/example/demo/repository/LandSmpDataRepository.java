package com.example.demo.repository;


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.LandSmpData;

@Repository
public interface LandSmpDataRepository  extends JpaRepository<LandSmpData, Integer>  {
       List<LandSmpData> findByDsBetween(LocalDate startDate, LocalDate endDate);
}
