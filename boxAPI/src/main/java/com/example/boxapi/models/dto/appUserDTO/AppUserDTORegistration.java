package com.example.boxapi.models.dto.appUserDTO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class AppUserDTORegistration {
    private LocalDate birthday;
    private String country;
    private Integer postal_code;
    private Integer phone_number;
}
