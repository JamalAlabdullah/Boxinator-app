package com.example.boxapi.services.weight.weightExceptions;

import com.example.boxapi.models.enums.WeightType;

public class WeighNotFoundException extends RuntimeException{

    public WeighNotFoundException(WeightType id) {super("No weight with id " + id + " exists");}
}
