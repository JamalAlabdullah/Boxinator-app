package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.models.dto.CountryDTO;
import com.example.boxapi.models.dto.ResponseMessage;
import com.example.boxapi.services.appuser.AppUserServiceImpl;
import com.example.boxapi.util.ApiErrorResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.context.annotation.Role;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.net.URI;
import java.security.Principal;
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
/*
    // This lets us see the entire principal object that spring security keeps of our user
    @GetMapping("/principal")
    public Principal getUser(Principal user) {
        return user;
    }

 */

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
    /*
    @GetMapping("current")
    public ResponseEntity getCurrentlyLoggedInUser(@AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(
                appUserService.findById(
                        jwt.getClaimAsString("sub")
                )
        );
    }
    */


    /*
    @PostMapping("register")
    public ResponseEntity addNewUserFromJwt(@AuthenticationPrincipal Jwt jwt) {
        AppUser user = appUserService.add(jwt.getClaimAsString("sub"));
        URI uri = URI.create("api/v1/account/" + user.getUser_id());
        return ResponseEntity.created(uri).build();
    }
    */

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
    public ResponseEntity add(@AuthenticationPrincipal Jwt jwt) {//@RequestBody AppUserDTO appUserDTO) {
        AppUser newAppuser = appUserService.createNewUserFromJWT(
                jwt);
        //AppUser newAppuser = appUserService.add(
        //        appUserMapper.appUserDTOtoAppUser(appUserDTO)
        //);
        URI uri = URI.create("account/" + newAppuser.getId());
        return ResponseEntity.created(uri).build();
    }

    /*@PostMapping
    public ResponseEntity<AppUser> addNewUser(@AuthenticationPrincipal Jwt principal){
        if(appUserService.checkIfUserExists(principal.getClaimAsString("email")))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

        return ResponseEntity.ok(appUserService.createNewUserProfileFromJWT(principal));
    }*/


    @Operation(summary = "Update existing user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Success",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = CountryDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "User not found with supplied ID",
                    content = @Content)
    })
    @PutMapping("{id}") // GET: localhost:8080/api/v1/settings/countries:1
    //RolesAllowed("user")
    //TODO
    public ResponseEntity update(@RequestBody AppUserDTO appUserDTO, @AuthenticationPrincipal Jwt jwt) {
        // if (!appUserDTO.getId().equals(jwt.getClaimAsString("sub"))) {
        //     ResponseEntity.badRequest().build();
        // }

        appUserService.update(
                appUserMapper.appUserDTOtoAppUser(appUserDTO)
        );

        return ResponseEntity.noContent().build();
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
            String test = appUserService.findById(id).getId();
            //appUserService.deleteById(jwt.getClaimAsString("sub"));
            appUserService.deleteById(test);
            return ResponseEntity.noContent().build();
        } else {
            System.out.println("Fungerer dette da?= DELETE skal ikke fungere uten admin");
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }


/*
        if (appUserService.findById(id).getId().equals(jwt.getClaimAsString("sub"))) {
            String test = appUserService.findById(id).getId();
            //appUserService.deleteById(jwt.getClaimAsString("sub"));
            appUserService.deleteById(test);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.noContent().build();
    }

 */
}

