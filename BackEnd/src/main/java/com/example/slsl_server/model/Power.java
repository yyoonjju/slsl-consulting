package com.example.slsl_server.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Power {
    @Id
    private Long index;
<<<<<<< HEAD

    @Column(columnDefinition="TEXT")
    private String loc;
    private LocalDate tm;
    private Long value;
=======
    @Column(columnDefinition = "TEXT")
    private String LOC;
    private LocalDate TM;
    private double value;
>>>>>>> ac158264eece096901718a0f48cecef95343d256
}
