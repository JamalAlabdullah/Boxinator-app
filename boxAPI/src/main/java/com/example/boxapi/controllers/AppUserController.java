package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.dto.*;
import com.example.boxapi.models.dto.appUserDTO.AppUserDTO;
import com.example.boxapi.models.dto.appUserDTO.AppUserDTORegistration;
import com.example.boxapi.models.dto.appUserDTO.AppUserDTOUpdate;
import com.example.boxapi.services.appuser.AppUserServiceImpl;
import com.example.boxapi.util.ApiErrorResponse;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping(path = "api/v1/account")
public class AppUserController {


    private final AppUserMapper appUserMapper;
    private final AppUserServiceImpl appUserService;


    @Operation(summary = "Gets user by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = AppUserDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "User not found with supplied ID",
                    content =
                            {@Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ApiErrorResponse.class))})
    })


    @GetMapping("{id}") // GET: localhost:8080/api/v1/account/1
    //RolesAllowed("user") //case sensitive!
    public ResponseEntity getById(@PathVariable String id, @AuthenticationPrincipal Jwt jwt) {
        AppUserDTO appUserDTO = appUserMapper.appUserToAppUserDTO(appUserService.findById(id));
        if (!Objects.equals(id, jwt.getClaimAsString("sub")))
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("User ID does not match!");
        ResponseMessage message = new ResponseMessage();
        message.setMessage("Resources for user:" + id);
        return ResponseEntity.ok(appUserDTO);
    }

    @GetMapping("current")
    public ResponseEntity getCurrentLogUser(@AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(
                appUserService.findById(
                        jwt.getClaimAsString("sub")
                )
        );
    }

    // TODO Er kanskje ikke nødvendig?
    @GetMapping
    //RolesAllowed("admin") //case sensitive
    public ResponseEntity<Collection<AppUserDTO>> getUsers() {
        Collection<AppUserDTO> appUsers = appUserMapper.appUsersToAppuserDTOs(
                appUserService.getUsers()
        );

        return ResponseEntity.ok(appUsers);
    }

    @Operation(summary = "Add new user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201",
                    description = "Created",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = AppUserDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "User cannot be created",
                    content = @Content)
    })
    @PostMapping()
    public ResponseEntity add(@AuthenticationPrincipal Jwt jwt, @RequestBody AppUserDTORegistration appUserDTORegistration) {
        AppUser newAppuser = appUserService.createNewUserFromJWT(
                jwt, appUserDTORegistration);
        //AppUser newAppuser = appUserService.add(
        //        appUserMapper.appUserDTOtoAppUser(appUserDTO)
        //);
        URI uri = URI.create("account/" + newAppuser.getId());
        return ResponseEntity.created(uri).build();
    }


    @Operation(summary = "Update existing user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = AppUserDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "User not found with supplied ID",
                    content = @Content)
    })
    @PutMapping("{id}") // GET: localhost:8080/api/v1/settings/countries:1
    public ResponseEntity update(@RequestBody AppUserDTOUpdate appUserDTOUpdate, @AuthenticationPrincipal Jwt jwt, @PathVariable String id) {
        if ((jwt.getClaimAsStringList("roles").contains("admin") || jwt.getClaimAsStringList("roles").contains("user")) && id.equals(jwt.getClaimAsString("sub"))) {
            appUserService.updateUser(
                    appUserMapper.appUserDTOtoAppUserUpdate(appUserDTOUpdate),
                    jwt
            );
            return ResponseEntity.noContent().build();
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }


    @ApiResponses(value = {
            @ApiResponse(responseCode = "204",
                    description = "User successfully deleted",
                    content = @Content),
            @ApiResponse(responseCode = "400",
                    description = "Malformed request",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorAttributeOptions.class))}),
            @ApiResponse(responseCode = "404",
                    description = "User not found with supplied ID",
                    content = @Content)
    })
    @Operation(summary = "Delete user by ID")
    @DeleteMapping(":{id}")
    public ResponseEntity delete(@AuthenticationPrincipal Jwt jwt, @PathVariable String id) {
        if (jwt.getClaimAsStringList("roles").contains("admin")) {
            String deleteUser = appUserService.findById(id).getId();
            //appUserService.deleteById(jwt.getClaimAsString("sub"));
            appUserService.deleteById(deleteUser);
            return ResponseEntity.noContent().build();
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

}

