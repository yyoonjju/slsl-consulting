package com.example.slsl_server.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class LandSmpPredictionData {
    @Id
    private Long index;
    private LocalDate ds;
    private Double yhat;
}
