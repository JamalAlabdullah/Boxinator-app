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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "country_id")
    private int id;
    @Column(length = 50)
    private String country_name;
    @Column(length = 10)
    private String multiplier;

    //Navigation/relationships
    @OneToMany(mappedBy = "country")
    private Set<Package> packages;
}
