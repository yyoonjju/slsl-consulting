package com.example.demo.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class CumulativeCapacity {
    @Id
    private Long index;
    @Column(columnDefinition = "TEXT")
    private String loc;
    private int year;
    private double capacity;
}
