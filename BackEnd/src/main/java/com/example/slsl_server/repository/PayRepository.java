package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.Pay;


@Repository
public interface PayRepository extends JpaRepository<Pay, Integer> {
    List<Pay> findByDateBetween(LocalDate startDate, LocalDate endDate);
}
