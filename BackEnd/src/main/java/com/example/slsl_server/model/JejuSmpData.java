package com.example.slsl_server.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class JejuSmpData {
    @Id
    private Long index;
    private LocalDate ds;
    private double y;
}
