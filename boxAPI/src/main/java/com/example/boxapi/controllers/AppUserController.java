package com.example.boxapi.controllers;


import com.example.boxapi.mappers.AppUserMapper;
import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.services.appuser.AppUserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;

@RestController
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
    @GetMapping("/{id}") // GET: localhost:8080/api/v1/account/1
    public ResponseEntity getById(@PathVariable int id) {
        AppUserDTO appUserDTO = appUserMapper.appUserToAppUserDTO(appUserService.findById(id));
        return ResponseEntity.ok(appUserDTO);
    }


    @GetMapping
    public ResponseEntity<Collection<AppUserDTO>> getUsers() {
        Collection<AppUserDTO> appUsers = appUserMapper.appuserToAppuserDTO(
                appUserService.findAll()
        );

        return ResponseEntity.ok(appUsers);
    }
/*
    @PostMapping("/save")
    public ResponseEntity<AppUser> saveUser(@RequestBody AppUser user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/account/save").toUriString());
        return ResponseEntity.created(uri).body(appUserService.saveUser(user));
    }

 */


    @Operation(summary = "Add user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201",
                    description = "Created",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = AppUserDTO.class))}),
            @ApiResponse(responseCode = "404",
                    description = "Movie cannot be created",
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




    /*PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/role/save").toUriString());
        return ResponseEntity.created(uri).body(appUserService.saveRole(role));
    }

     */

    /*PostMapping("/role/addtouser")
    public ResponseEntity<?> saveRole(@RequestBody RoleToUserForm form) {
        appUserService.addRoleToUser(form.getUsername(), form.getRoleName());
        return ResponseEntity.ok().build();
    }

     */


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

