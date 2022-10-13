package com.example.boxapi.models.dto;

import com.example.boxapi.models.enums.RoleType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
public class AppUserDTO {

    private int id;
    private LocalDate birthday;
    private String country;
    private int postal_code;
    private int phone_number;
    private Set<Integer> packages;
    private RoleType role;
}

