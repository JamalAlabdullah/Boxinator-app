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
    @Column(name = "weight_id")
    @Enumerated(EnumType.STRING)
    private WeightType id;
    @Column(length = 2)
    private int value;



    @OneToMany(mappedBy = "weight")
    private Set<Package> packages;
}


