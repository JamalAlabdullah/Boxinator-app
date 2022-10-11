package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.models.dto.CountryDTO;
import com.example.boxapi.services.appuser.AppUserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.net.URI;
import java.security.Principal;
import java.util.Collection;

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
                    content = @Content)
    })
    @GetMapping("{id}") // GET: localhost:8080/api/v1/account/1
    //RolesAllowed("user") //case sensitive!
    public ResponseEntity getById(@PathVariable int id) {
        AppUserDTO appUserDTO = appUserMapper.appUserToAppUserDTO(appUserService.findById(id));
        return ResponseEntity.ok(appUserDTO);
    }

    @GetMapping("/principal")
    public Principal getUser(Principal user){
        return user;
    }


    @GetMapping
    //RolesAllowed("admin") //case sensitive
    public ResponseEntity<Collection<AppUserDTO>> getUsers() {
        Collection<AppUserDTO> appUsers = appUserMapper.appuserToAppuserDTO(
                appUserService.findAll()
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
    public ResponseEntity add(@RequestBody AppUserDTO appUserDTO) {
        AppUser newAppuser = appUserService.add(
                appUserMapper.appUserDTOtoAppUser(appUserDTO)
        );
        URI uri = URI.create("account/" + newAppuser.getUser_id());
        return ResponseEntity.created(uri).build();
    }

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
    @PutMapping ("{id}") // GET: localhost:8080/api/v1/settings/countries:1
    //RolesAllowed("user")
    public ResponseEntity update(@RequestBody AppUserDTO appUserDTO, @PathVariable int id) {
        if (appUserDTO.getUser_id() != id) {
            ResponseEntity.badRequest().build();
        }
        AppUser updatedUser = appUserService.update(
                appUserMapper.appUserDTOtoAppUser(appUserDTO)
        );

        return ResponseEntity.noContent().build();
    }




    // This endpoint just shows the information from the token
    // The token is received through the @AuthenticationPrincipal via Spring Security.
   /* @GetMapping
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal Jwt principal) {
        Map<String, String> map = new Hashtable<String, String>();
        map.put("user_name", principal.getClaimAsString("preferred_username"));
        map.put("email", principal.getClaimAsString("email"));
        map.put("first_name", principal.getClaimAsString("given_name"));
        map.put("last_name", principal.getClaimAsString("family_name"));
        map.put("roles", String.valueOf(principal.getClaimAsStringList("roles")));
        return Collections.unmodifiableMap(map);
    }

    // This lets us see the entire principal object that spring security keeps of our user
    @GetMapping("/principal")
    public Principal getUser(Principal user){
        return user;
    }

    @PostMapping
    public ResponseEntity<AppUser> addNewUser(@AuthenticationPrincipal Jwt principal){
        if(appUserService.checkIfUserExists(principal.getClaimAsString("email")))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

        return ResponseEntity.ok(appUserService.createNewUserProfileFromJWT(principal));
    }*/

}

