package com.example.boxapi.models.enums;

public enum WeightType {
    BASIC(1),
    HUMBLE(2),
    DELUXE(5),
    PREMIUM(8);

    public final int value;
    WeightType(int value) {
        this.value = value;
    }

}
