package com.example.boxapi.models.dto;

import com.example.boxapi.models.enums.WeightType;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class WeightDTO {

    private String id;
    private int value;
    private Set<Integer> packages;
}
