package com.example.boxapi.models;

import com.example.boxapi.models.enums.Status;
import com.example.boxapi.models.enums.WeightType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "package_id")
    private int id;
    @Column(length = 100)
    private String receiver_name;
    //Enumerated(EnumType.STRING)
    @Column(length = 50)
    private String color;
    @Column(length = 50)
    private LocalDate date;
    @Enumerated(EnumType.STRING)
    private Status status;
    @Column(length = 6)
    private Integer totalSum;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private AppUser appUser;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

    @ManyToOne
    @JoinColumn(name = "weight_id")
    private Weight weight;

}
