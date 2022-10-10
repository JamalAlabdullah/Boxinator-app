package com.example.boxapi.services.appuser;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.services.CrudService;

import java.util.Collection;

public interface AppUserService extends CrudService<AppUser, Integer> {
    AppUser saveUser(AppUser user);
    /*
    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);
    
     */
    AppUser getUser(String username);

    Collection<AppUser> getUsers(); //should return a page with a limit of users? video: 21:00
}