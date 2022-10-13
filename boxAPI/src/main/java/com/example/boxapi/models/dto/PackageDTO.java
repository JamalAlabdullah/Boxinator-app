package com.example.boxapi.models.dto;


import com.example.boxapi.models.enums.Status;
import com.example.boxapi.models.enums.WeightType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
public class PackageDTO {

    private int id;
    private String receiver_name;
    private int weight;
    private String color;
    private LocalDate date;
    private Status status;
    private String mail;
    private int appUser;
    private String country;

}
