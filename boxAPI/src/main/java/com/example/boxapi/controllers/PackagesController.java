package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.mappers.PackageMapper;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.models.dto.PackageDTO;
import com.example.boxapi.models.enums.Status;
import com.example.boxapi.services.appuser.AppUserServiceImpl;
import com.example.boxapi.services.packages.PackageService;
import com.example.boxapi.services.packages.PackageServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/shipments")
public class PackagesController {


    private final PackageMapper packageMapper;
    private final PackageServiceImpl packageService;

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
        Collection<PackageDTO> packages = packageMapper.packageToPackageDTO(
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
        Collection<PackageDTO> packages = packageMapper.packageToPackageDTO(
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
        Collection<PackageDTO> packages = packageMapper.packageToPackageDTO(
                packageService.findByStatus(Status.CANCELLED)
        );
        return ResponseEntity.ok(packages);
    }

}
