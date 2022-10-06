package com.example.boxapi.controllers;


import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.services.appuser.AppUserService;
import com.example.boxapi.services.appuser.AppUserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
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

import java.security.Principal;
import java.util.Collection;
import java.util.Collections;
import java.util.Hashtable;
import java.util.Map;

@RestController
@RequestMapping(path = "api/v1")
public class AppUserController {

    //private final AppUserMapper appUserMapper;
    private final AppUserServiceImpl appUserService;

    private AppUserController(AppUserServiceImpl appUserService){
        this.appUserService = appUserService;
    }

    // This endpoint just shows the information from the token
    // The token is received through the @AuthenticationPrincipal via Spring Security.
    @GetMapping
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
    }

}
