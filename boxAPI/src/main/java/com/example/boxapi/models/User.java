package com.example.boxapi.models;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;
    @Column(length = 50)
    private Date birthday;
    @Column(length = 50)
    private String country;
    @Column(length = 10)
    private int postal_code;
    @Column(length = 15)
    private int phone_number;


    //Navigation/relationships
    @OneToMany(mappedBy = "package")
    private Set<Package> packages;
}
