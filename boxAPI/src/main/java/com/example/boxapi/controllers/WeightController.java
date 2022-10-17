package com.example.boxapi.controllers;

import com.example.boxapi.mappers.WeightMapper;
import com.example.boxapi.models.dto.WeightDTO;
import com.example.boxapi.models.enums.WeightType;
import com.example.boxapi.services.weight.WeightService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/weight")
public class WeightController {

    private final WeightMapper weightMapper;
    private final WeightService weightService;
    @GetMapping("{id}")
    //RolesAllowed("user") //case sensitive!
    public ResponseEntity getById(@PathVariable WeightType id) {
        WeightDTO weightDTO = weightMapper.weightToWeightDTO(weightService.findById(id));
        return ResponseEntity.ok(weightDTO);
    }
    //    AppUserDTO appUserDTO = appUserMapper.appUserToAppUserDTO(appUserService.findById(id));
    //    return ResponseEntity.ok(appUserDTO);
    //}
}
