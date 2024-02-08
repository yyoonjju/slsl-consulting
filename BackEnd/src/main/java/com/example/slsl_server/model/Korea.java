package com.example.slsl_server.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Korea implements Kor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;
    private LocalDate date;
    private int time;
    private double loc_power;
    private double loc_total;

    @Override
    public void displayInfo() {
        System.err.println(date);
    }
}
