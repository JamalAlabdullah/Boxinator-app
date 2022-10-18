package com.example.boxapi.models.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
public class AppUserDTO {

    private String id;
    private LocalDate birthday;
    private String country;
    private int postal_code;
    private int phone_number;
    private Set<Integer> packages;
    private String role;
    private String email;
    private String name;
    private String username;
    private Boolean complete;
}

