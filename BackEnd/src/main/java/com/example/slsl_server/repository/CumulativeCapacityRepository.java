package com.example.slsl_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.CumulativeCapacity;

@Repository
public interface CumulativeCapacityRepository extends JpaRepository<CumulativeCapacity, Long> {

}
