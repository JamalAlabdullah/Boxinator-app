package com.example.boxapi.models.dto.packageDTO;

import com.example.boxapi.models.enums.Status;
import com.example.boxapi.models.enums.WeightType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class PackageDTOGuest {
    private int id;
    private String receiver_name;
    private WeightType weight;
    private String color;
    private LocalDate date;
    private Status status;
    private String email;
    private String country;
    private Integer totalSum;
}
