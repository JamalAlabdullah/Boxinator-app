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
    private int country_id;
    @Column(length = 50)
    private String country_name;
    @Column(length = 10)
    private String multiplier;

    //Navigation/relationships
    @OneToMany(mappedBy = "package")
    private Set<Package> packages;
}
