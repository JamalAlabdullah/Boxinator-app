package com.example.boxapi.models;


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
    @Column(name = "user_id")
    private String id; //email?
    @Column(length = 50)
    private LocalDate birthday;
    @Column(length = 50)
    private String country;
    @Column(length = 10)
    private Integer postal_code;
    @Column(length = 15)
    private Integer phone_number;
    @Column
    private String role;
    @Column(length = 150)
    private String username;
    @Column(length = 150)
    private String name;
    @Column(length = 150)
    private String password;
    @Column(length = 150)
    private String email;

    //Navigation/relationships
    @OneToMany(mappedBy = "appUser")
    private Set<Package> packages;

}
