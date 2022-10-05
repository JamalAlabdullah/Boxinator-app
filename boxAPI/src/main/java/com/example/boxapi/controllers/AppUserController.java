package com.example.boxapi.controllers;


import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.services.appuser.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(path = "api/v1")
public class AppUserController {

    //private final AppUserMapper appUserMapper;
    private final AppUserService appUserService;

    private AppUserController(AppUserService appUserService){
        this.appUserService = appUserService;
    }

    @Operation(summary = "Get all characters")
    @GetMapping(path = "/characters")// GET: localhost:8080/api/v1/characters
    public ResponseEntity<Collection<Character>> getAll() {
        return ResponseEntity.ok(AppUserService.findAll());
    }

    // Get characters by id
    @Operation(summary = "Gets character by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = AppUserDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Character not found with supplied ID",
                    content = @Content)

    })
    @GetMapping("/appuser/{id}") // GET: localhost:8080/api/v1/characters/1
    public ResponseEntity getById(@PathVariable int id) {
        AppUserDTO characterDTO = appUserMapper.appusertouserDTO(
                AppUserService.findById(id)
        );
        return ResponseEntity.ok(characterDTO);
    }
}
