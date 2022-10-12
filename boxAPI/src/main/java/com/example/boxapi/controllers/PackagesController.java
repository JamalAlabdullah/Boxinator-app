package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.mappers.PackageMapper;
import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.models.dto.PackageDTO;
import com.example.boxapi.models.enums.Status;
import com.example.boxapi.services.appuser.AppUserService;
import com.example.boxapi.services.packages.PackageServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/shipments")
public class PackagesController {


    private final PackageMapper packageMapper;
    private final PackageServiceImpl packageService;
    private final AppUserService appUserService;
    private final AppUserMapper appUserMapper;

    @Operation(summary = "Gets all packages")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "No shipments",
                    content = @Content)
    })
    @GetMapping
    public ResponseEntity<Collection<PackageDTO>> getPackages() {
        Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                packageService.getPackages()
        );

        return ResponseEntity.ok(packages);
    }

    @Operation(summary = "Gets completed shipments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "No completed shipments",
                    content = @Content)
    })
    @GetMapping("/complete")
    public ResponseEntity getCompletedShipments() {
        Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                packageService.findByStatus(Status.COMPLETED)
        );
        return ResponseEntity.ok(packages);
    }


    @Operation(summary = "Gets cancelled shipments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "No cancelled shipments",
                    content = @Content)
    })
    @GetMapping("/cancelled")
    public ResponseEntity getCancelledShipments() {
        Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                packageService.findByStatus(Status.CANCELLED)
        );
        return ResponseEntity.ok(packages);
    }


    @Operation(summary = "Add package")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201",
                    description = "Created",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Package cannot be created",
                    content = @Content)
    })
    @PostMapping()
    public ResponseEntity addPackage(@RequestBody PackageDTO packageDTO) {
        Package newPackage = packageService.add(
                packageMapper.packageDTOtoPackage(packageDTO)
        );
        URI uri = URI.create("shipment/" + newPackage.getId());
        return ResponseEntity.created(uri).build();
    }

    @Operation(summary = "Gets package by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Package not found with supplied ID",
                    content = @Content)
    })
    @GetMapping("{id}")
    public ResponseEntity getById(@PathVariable int id) {
        PackageDTO packageDTO = packageMapper.packageToPackageDTO(packageService.findById(id));
        return ResponseEntity.ok(packageDTO);
    }


    @Operation(summary = "Gets package by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Package not found with supplied ID",
                    content = @Content)
    })

    @GetMapping("customer/{id}")
    public ResponseEntity getPackagesFromCustomer(@PathVariable int id) {
        AppUser appUser = appUserService.findById(id);
        Collection<PackageDTO> packages = appUser.getPackages().stream().map(
                packageMapper::packageToPackageDTO
        ).collect(Collectors.toSet());
        return ResponseEntity.ok(packages);
    }
    /*
    @GetMapping("customer/{id}")
    public ResponseEntity<Set<Package>> get(@PathVariable int id){
        AppUserDTO appUserDTO = appUserMapper.appUserToAppUserDTO(appUserService.findById(id));
        Set<Package> packages = appUserDTO.getPackages();
        return ResponseEntity.ok(packages);
    }

     */

    @Operation(summary = "Update existing shipment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Package not found with supplied id",
                    content = @Content)
    })
    @PutMapping(":{id}")
    public ResponseEntity update(@RequestBody PackageDTO packageDTO, @PathVariable int id) {
        if (packageDTO.getId() != id)
            ResponseEntity.badRequest().build();
        packageService.update(
                packageMapper.packageDTOtoPackage(packageDTO)
        );
        return ResponseEntity.noContent().build();
    }
}