package com.example.boxapi.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

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
    @Column(length = 50)
    private String weight;
    @Column(length = 50)
    private String color;
    @Column(length = 50)
    private Date date;
    @Column(length = 50)
    private String status;
    @Column(length = 100)
    private String mail;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

}
