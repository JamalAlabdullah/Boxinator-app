package com.example.boxapi.models;


import com.example.boxapi.models.enums.RoleType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;
    @Column(length = 50)
    private LocalDate birthday;
    @Column(length = 50)
    private String country;
    @Column(length = 10)
    private int postal_code;
    @Column(length = 15)
    private int phone_number;
    @Enumerated(EnumType.STRING)
    private RoleType role;

    private String username;
    private String name;
    private String email;
    private String password;

    //Navigation/relationships
    @OneToMany(mappedBy = "appUser")
    private Set<Package> packages;

}
