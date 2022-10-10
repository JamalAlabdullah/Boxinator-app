package com.example.boxapi.models.dto;

import com.example.boxapi.models.Country;
import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.enums.Status;
import com.example.boxapi.models.enums.Weight;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Getter
@Setter
public class PackageDTO {

    private int package_id;
    private String receiver_name;
    private Weight weight;
    private String color;
    private Date date;
    private Status status;
    private String mail;
    private AppUser Appuser;
    private Country country;
}
