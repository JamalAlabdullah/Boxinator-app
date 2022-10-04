package com.example.boxapi.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;


/**
 * package_id pk
 * user_id fk
 * country_id fk
 * receiverName
 * weight
 * color
 * date
 * status
 * mail
 */

@Entity
@Getter
@Setter
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private int package_id;
    @Column(length = 100)
    private String receiver_name;
    @Enumerated(EnumType.STRING)
    private String weight;
    @Column(length = 50)
    private String color;
    @Column(length = 50)
    private LocalDate date;
    @Enumerated(EnumType.STRING)
    private String status;
    @Column(length = 100)
    private String mail;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private AppUser app_user;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

}
