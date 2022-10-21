package com.example.boxapi.models.dto.countryDTO;

import com.example.boxapi.models.Package;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class CountryDTO {
    private String id; //the name of the country
    private int multiplier;
    private Set<Integer> packages;
}
