package com.example.boxapi.models.dto;

import com.example.boxapi.models.Country;
import com.example.boxapi.models.User;
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
    private String weight;
    private String color;
    private Date date;
    private String status;
    private String mail;
    private User user;
    private Country country;
}
