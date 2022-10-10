package com.example.boxapi.repositories;

import com.example.boxapi.models.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer> {
}
