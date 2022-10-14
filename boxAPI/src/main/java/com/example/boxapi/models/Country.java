package com.example.boxapi.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
public class Country {
    @Id
    //GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, name = "country_id")
    private String id; //country-name
    //Column(length = 50)
    //private String country_name;
    @Column(length = 10)
    private String multiplier;

    //Navigation/relationships
    @OneToMany(mappedBy = "country")
    private Set<Package> packages;
}
