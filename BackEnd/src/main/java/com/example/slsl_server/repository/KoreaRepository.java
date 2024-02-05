package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.Korea;


@Repository
public interface KoreaRepository extends JpaRepository<Korea,Integer> {
    List<Korea> findByDate(LocalDate date);
}
