package com.example.boxapi.controllers;

import com.example.boxapi.mappers.CountryMapper;
import com.example.boxapi.models.Country;
import com.example.boxapi.models.dto.countryDTO.CountryDTO;
import com.example.boxapi.services.country.CountryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;

@RestController
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/settings/countries")
public class CountryController {

    private final CountryMapper countryMapper;
    private final CountryService countryService;


    @Operation(summary = "Gets all countries")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CountryDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Countries not found",
                    content = @Content)
    })
    @GetMapping("get")
    public ResponseEntity<Collection<CountryDTO>> getCountries() {
        Collection<CountryDTO> countries = countryMapper.countryToCountryDTO(
                countryService.findAll()
        );
        return ResponseEntity.ok(countries);
    }

    @Operation(summary = "Add a new country")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CountryDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Country not found with supplied ID",
                    content = @Content)
    })
    @PostMapping
    public ResponseEntity add(@AuthenticationPrincipal Jwt jwt, @RequestBody CountryDTO countryDTO) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            Country newCountry = countryService.add(
                    countryMapper.countryDTOtoCountry(countryDTO)
            );
            URI uri = URI.create("countries/" + newCountry.getId());
            return ResponseEntity.created(uri).build();
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @Operation(summary = "Update existing country")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CountryDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Country not found with supplied ID",
                    content = @Content)
    })
    @PutMapping("{id}") // GET: localhost:8080/api/v1/settings/countries:1
    public ResponseEntity update(@AuthenticationPrincipal Jwt jwt, @RequestBody CountryDTO countryDTO, @PathVariable String id) {
        if ((jwt.getClaimAsStringList("roles").contains("admin")) && id.equals(countryDTO.getId())) {
            countryService.update(
                    countryMapper.countryDTOtoCountry(countryDTO)
            );
            return ResponseEntity.noContent().build();
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}


