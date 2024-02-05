package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.Seoul;


@Repository
public interface SeoulRepository extends JpaRepository<Seoul,Integer> {
    List<Seoul> findByDate(LocalDate date);
}
