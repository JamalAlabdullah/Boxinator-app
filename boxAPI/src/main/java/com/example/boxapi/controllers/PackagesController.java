package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.mappers.PackageMapper;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.models.dto.PackageDTO;
import com.example.boxapi.services.appuser.AppUserServiceImpl;
import com.example.boxapi.services.packages.PackageService;
import com.example.boxapi.services.packages.PackageServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/shipments")
public class PackagesController {


    private final PackageMapper packageMapper;
    private final PackageServiceImpl packageService;

    @GetMapping
    public ResponseEntity<Collection<PackageDTO>> getPackages() {
        Collection<PackageDTO> packages = packageMapper.packageToPackageDTO(
                packageService.getPackages()
        );

        return ResponseEntity.ok(packages);
    }

}
