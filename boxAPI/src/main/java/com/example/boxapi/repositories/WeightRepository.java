package com.example.boxapi.repositories;

import com.example.boxapi.models.Weight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeightRepository extends JpaRepository<Weight, Integer> {
}
