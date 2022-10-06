package com.example.boxapi.services.appuser;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Role;
import com.example.boxapi.models.enums.RoleType;
import com.example.boxapi.repositories.AppUserRepository;
import com.example.boxapi.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;

@Service
public class AppUserServiceImpl implements AppUserService{

    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private RoleRepository roleRepository;

    public boolean checkIfUserExists(String email){
        return appUserRepository.existsByEmail(email);
    }

    public boolean assignRolesToUser(AppUser user, List<RoleType> roles){
        return false;
    }

    public AppUser createNewUserProfileFromJWT(Jwt principal) {
        AppUser newUser = new AppUser();
        newUser.setEmail(principal.getClaimAsString("email"));
        newUser.setName(principal.getClaimAsString("given_name"));
        newUser.setSurname(principal.getClaimAsString("family_name"));
        // There are cleaner ways of doing this - this is just an example
        List<String> roles = principal.getClaimAsStringList("roles");
        HashSet<Role> dbRoles = new HashSet<>();
        for (String role: roles) {
            dbRoles.add(roleRepository.getRoleByName(role));
        }
        newUser.setRoles(dbRoles);
        newUser = (AppUser) appUserRepository.save(newUser);

        return newUser;
    }


    public AppUserServiceImpl(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @Override
    public AppUser findById(Integer id) {
        return (AppUser) appUserRepository.findById(id).get();
    }

    @Override
    public Collection<AppUser> findAll() {
        return null;
    }

    @Override
    public AppUser add(AppUser entity) {
        return null;
    }

    @Override
    public AppUser update(AppUser entity) {
        return null;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(AppUser entity) {

    }
}
