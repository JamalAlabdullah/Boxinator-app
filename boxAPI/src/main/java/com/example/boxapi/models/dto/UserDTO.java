package com.example.boxapi.models.dto;

import com.example.boxapi.models.Package;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
public class UserDTO {

    private int user_id;
    private Date birthday;
    private String country;
    private int postal_code;
    private int phone_number;
    private Set<Integer> packages;
}

