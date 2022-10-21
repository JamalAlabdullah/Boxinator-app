package com.example.boxapi.repositories;

import com.example.boxapi.models.Package;
import com.example.boxapi.models.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer> {
    Collection<Package> findByStatus(Status status);
}
