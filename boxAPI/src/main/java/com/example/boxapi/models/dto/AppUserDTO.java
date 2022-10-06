package com.example.boxapi.models.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
public class AppUserDTO {

    private int user_id;
    private Date birthday;
    private String country;
    private int postal_code;
    private int phone_number;
    private Set<Integer> packages;
    private Set<Integer> roles;
}

