package com.example.boxapi.models.dto;

import com.example.boxapi.models.enums.RoleType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
<<<<<<< HEAD
import java.util.Date;
=======
>>>>>>> 194d0baaa0cb47ba8c9df3fa05f0e8e72a9926a9
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

