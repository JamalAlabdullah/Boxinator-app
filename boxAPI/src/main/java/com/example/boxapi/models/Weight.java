package com.example.boxapi.models;

import com.example.boxapi.models.enums.WeightType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
public class Weight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "weight_id")
    private int id;
    @Enumerated(EnumType.STRING)
    private WeightType weightType;
    @Column(length = 2)
    private int value;



    @OneToMany(mappedBy = "weight")
    private Set<Package> packages;
}


