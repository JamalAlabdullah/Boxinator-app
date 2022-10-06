package com.example.boxapi.models;


import javax.persistence.*;

import java.util.Set;

import static javax.persistence.GenerationType.*;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int Id;

    private String name;

    @ManyToMany(mappedBy="roles")
    public Set<AppUser> users;

    // props
    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<AppUser> getUsers() {
        return users;
    }

    public void setUsers(Set<AppUser> users) {
        this.users = users;
    }
}


