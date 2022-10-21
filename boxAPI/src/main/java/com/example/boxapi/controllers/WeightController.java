package com.example.boxapi.controllers;

import com.example.boxapi.mappers.WeightMapper;
import com.example.boxapi.models.dto.weightDTO.WeightDTO;
import com.example.boxapi.services.weight.WeightService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/weight")
public class WeightController {

    private final WeightMapper weightMapper;
    private final WeightService weightService;

    @GetMapping
    public ResponseEntity<Collection<WeightDTO>> get() {
        Collection<WeightDTO> weightDTO = weightMapper.weightToWeightDTO(weightService.findAll());
        return ResponseEntity.ok(weightDTO);
    }

}
