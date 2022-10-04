package com.example.boxapi.models;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Getter
@Setter
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;
    @Column(length = 50)
    private LocalDate birthday;
    @Column(length = 50)
    private String country;
    @Column(length = 10)
    private int postal_code;
    @Column(length = 15)
    private int phone_number;


    //Navigation/relationships
    @OneToMany(mappedBy = "app_user")
    private Set<Package> packages;

}
