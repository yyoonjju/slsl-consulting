package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.slsl_server.model.LandSmpData;

@Repository
public interface LandSmpDataRepository  extends JpaRepository<LandSmpData, Integer>  {
       List<LandSmpData> findByDateBetween(LocalDate startDate, LocalDate endDate);
}
