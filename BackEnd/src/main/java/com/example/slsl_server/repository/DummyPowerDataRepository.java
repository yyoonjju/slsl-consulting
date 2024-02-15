package com.example.slsl_server.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.slsl_server.model.DummyPowerData;

@Repository
public interface DummyPowerDataRepository extends JpaRepository<DummyPowerData, Long> {
    List<DummyPowerData> findByLocAndDateBetween(String loc, LocalDate firstDate, LocalDate secondDate);

    @Query(value =
        "SELECT date, AVG(value) as value " +
        "FROM dummy_power_data " +
        "WHERE `date` BETWEEN :firstDate AND :secondDate " +
        "GROUP BY `date`",
        nativeQuery = true
    )
    List<Map<String,Object>> findGroupByDateWithNativeQuery(
        @Param("firstDate") LocalDate firstDate,
        @Param("secondDate") LocalDate secondDate
    );
}
