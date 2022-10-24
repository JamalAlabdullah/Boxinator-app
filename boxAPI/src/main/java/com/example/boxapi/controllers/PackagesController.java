package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.mappers.PackageMapper;
import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.packageDTO.PackageDTO;
import com.example.boxapi.models.dto.packageDTO.PackageDTOGuest;
import com.example.boxapi.models.dto.packageDTO.PackageDTOStatus;
import com.example.boxapi.models.enums.Status;
import com.example.boxapi.services.appuser.AppUserService;
import com.example.boxapi.services.packages.PackageServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;
import java.util.Objects;
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
    @GetMapping()
    public ResponseEntity<Collection<PackageDTO>> getPackages(@AuthenticationPrincipal Jwt jwt) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                    packageService.getPackages());
            return ResponseEntity.ok(packages);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

    }

    @Operation(summary = "Gets created shipments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "No created shipments",
                    content = @Content)
    })
    @GetMapping("/created")
    public ResponseEntity getCreatedhipments(@AuthenticationPrincipal Jwt jwt) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                    packageService.findByStatus(Status.CREATED));
            return ResponseEntity.ok(packages);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

    }


    @Operation(summary = "Gets recieved shipments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "No recieved shipments",
                    content = @Content)
    })
    @GetMapping("/received")
    public ResponseEntity getRecievedhipments(@AuthenticationPrincipal Jwt jwt) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                    packageService.findByStatus(Status.RECIEVED));
            return ResponseEntity.ok(packages);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

    }


    @Operation(summary = "Gets intransit shipments")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PackageDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "No intransit shipments",
                    content = @Content)
    })
    @GetMapping("/intransit")
    public ResponseEntity getIntransitShipments(@AuthenticationPrincipal Jwt jwt) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                    packageService.findByStatus(Status.INTRANSIT));
            return ResponseEntity.ok(packages);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

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
    @GetMapping("/completed")
    public ResponseEntity getCompletedShipments(@AuthenticationPrincipal Jwt jwt) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                    packageService.findByStatus(Status.COMPLETED));
            return ResponseEntity.ok(packages);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

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
    public ResponseEntity getCancelledShipments(@AuthenticationPrincipal Jwt jwt) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            Collection<PackageDTO> packages = packageMapper.packagesToPackageDTOs(
                    packageService.findByStatus(Status.CANCELLED));
            return ResponseEntity.ok(packages);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

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

    @PostMapping("guest")
    public ResponseEntity guestAddPackage(@RequestBody PackageDTOGuest packageDTOGuest) {
        Package newPackage = packageService.add(
                packageMapper.packageDTOtoPackage(packageDTOGuest)
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
    public ResponseEntity getPackagesFromCustomer(@PathVariable String id, @AuthenticationPrincipal Jwt jwt) {
        if (!Objects.equals(id, jwt.getClaimAsString("sub"))) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("User ID does not match!");
        }

        AppUser appUser = appUserService.findById(id);
        Collection<PackageDTO> packages = appUser.getPackages().stream().map(
                packageMapper::packageToPackageDTO
        ).collect(Collectors.toSet());
        return ResponseEntity.ok(packages);
    }

    // TODO Need to fix admin/user rights
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
    @PutMapping("{id}")
    //TODO hvis det kan ordnes i frontend blir vi glade, ellers må vi fikse rollene her
    public ResponseEntity update(@RequestBody PackageDTO packageDTO, @PathVariable int id, @AuthenticationPrincipal Jwt jwt) {
        if ((jwt.getClaimAsStringList("roles").contains("admin") || jwt.getClaimAsStringList("roles").contains("user")) && id == packageDTO.getId() ) {
            packageService.update(
                    packageMapper.packageDTOtoPackage(packageDTO)
            );
            return ResponseEntity.noContent().build();
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PutMapping("status/{id}")
    //TODO hvis det kan ordnes i frontend blir vi glade, ellers må vi fikse rollene her
    public ResponseEntity updateStatus(@RequestBody PackageDTO packageDTO, @PathVariable int id, @AuthenticationPrincipal Jwt jwt) {
        if ((jwt.getClaimAsStringList("roles").contains("admin") || jwt.getClaimAsStringList("roles").contains("user")) && id == packageDTO.getId() ) {
            packageService.updateStatus(packageMapper.packageDTOtoPackage(packageDTO)
            );
            return ResponseEntity.noContent().build();
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }




    // TODO Need to make this so only ADMIN can delete:
    // TODO Also fix pointers?

    @ApiResponses(value = {
            @ApiResponse(responseCode = "204",
                    description = "Shipment successfully deleted",
                    content = @Content),
            @ApiResponse(responseCode = "400",
                    description = "Malformed request",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorAttributeOptions.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Shipment not found with supplied ID",
                    content = @Content)
    })
    @Operation(summary = "Delete shipment by ID")
    @DeleteMapping(":{id}")
    public ResponseEntity delete(@PathVariable int id, @AuthenticationPrincipal Jwt jwt) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            int deletePackage = packageService.findById(id).getId();
            packageService.deleteById(deletePackage);
            return ResponseEntity.noContent().build();
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

    }
}