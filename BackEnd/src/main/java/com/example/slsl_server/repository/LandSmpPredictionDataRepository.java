package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.LandSmpPredictionData;

@Repository
public interface LandSmpPredictionDataRepository extends JpaRepository<LandSmpPredictionData, Long> {
    List<LandSmpPredictionData> findByDsBetween(LocalDate firsDate, LocalDate secondDate);
}
