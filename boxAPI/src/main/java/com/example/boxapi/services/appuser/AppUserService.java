package com.example.boxapi.services.appuser;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.services.CrudService;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Collection;

public interface AppUserService extends CrudService<AppUser, String> {
    // TODO ble dette riktig?
    // TODO Packages ser ikke ut til å bli riktig når man endrer på bruker
    AppUser updateUser(AppUser entity, Jwt jwt);

    AppUser saveUser(AppUser user);
    /*
    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);
    
     */
    AppUser getUser(String username);

    AppUser add(String uid);

    Collection<AppUser> getUsers(); //should return a page with a limit of users? video: 21:00
}
