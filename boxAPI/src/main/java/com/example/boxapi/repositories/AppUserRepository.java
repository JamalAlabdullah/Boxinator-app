package com.example.boxapi.repositories;

import com.example.boxapi.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, String> {
    AppUser findAppUserByUsername(String username);
    boolean existsByEmail(String email);
}
