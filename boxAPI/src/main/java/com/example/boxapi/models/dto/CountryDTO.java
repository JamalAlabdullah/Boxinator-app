package com.example.boxapi.models.dto;

import com.example.boxapi.models.Package;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class CountryDTO {
    private int id;
    private String country_name;
    private int multiplier;
    private Set<Integer> packages;
}
