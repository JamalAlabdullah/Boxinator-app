package com.example.boxapi.services.appuser;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.repositories.AppUserRepository;
import com.example.boxapi.services.appuser.appuserExceptions.AppUserNotFoundException;

import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

@Service
//RequiredArgsConstructor
@Transactional
@Slf4j //logging
public class AppUserServiceImpl implements AppUserService {

    @Autowired
    private final AppUserRepository appUserRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    /*public boolean checkIfUserExists(String email){
        return appUserRepository.existsByEmail(email);
    }

     */

    // public boolean assignRolesToUser(AppUser user, List<RoleType> roles){
    // return false;
    //}

    /*
    public AppUser createNewUserProfileFromJWT(Jwt principal) {
        AppUser newUser = new AppUser();
        newUser.setEmail(principal.getClaimAsString("email"));
        newUser.setName(principal.getClaimAsString("given_name"));
        newUser.setname(principal.getClaimAsString("family_name"));
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

     */


    @Override
    public AppUser findById(String id) throws AppUserNotFoundException {
        //log.info(String.valueOf(new AppUserNotFoundException(id)));
        return appUserRepository
                .findById(id)
                .orElseThrow(() -> new AppUserNotFoundException(id));
    }

    @Override
    public Collection<AppUser> findAll() {
        return appUserRepository.findAll();
    }

    @Override
    public AppUser add(AppUser entity) {
        if (appUserRepository.existsById(entity.getId()))
            // TODO make new exception
            throw new AppUserNotFoundException(entity.getId());
        return appUserRepository.save(entity);
    }

    @Override
    public AppUser add(String uid) {
        if (appUserRepository.existsById(uid))
            // TODO make new exception
            throw new AppUserNotFoundException(uid);
        AppUser newAppuser = new AppUser();
        newAppuser.setId(uid);
        newAppuser.setComplete(false);

        return appUserRepository.save(newAppuser);
    }

    @Override
    public AppUser update(AppUser entity) {
        return null;
    }


    @Override
    public void deleteById(String id) throws AppUserNotFoundException {
        if (appUserRepository.existsById(id)) {
            AppUser appUser = appUserRepository.findById(id).get();
            appUser.getPackages().forEach(p -> p.setAppUser(null));
            appUserRepository.delete(appUser);
        } else {
            log.warn("No appuser exist with ID: " + id);
            throw new AppUserNotFoundException(id);
        }

    }

    @Override
    public void delete(AppUser entity) {

    }


    @Override
    public AppUser saveUser(AppUser user) {
        log.info("Saving new user {} to the database", user.getName());
        return appUserRepository.save(user);
    }

    /*Override
    public Role saveRole(Role role) {
        log.info("Saving new role {} to the database", role.getName());
        return roleRepository.save(role);
    }

     */
    /*Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adding role {} to user {}", roleName, username);
        AppUser user = appUserRepository.findAppUserByUsername(username);
        Role role = roleRepository.getRoleByName(roleName);
        user.getRoles().add(role);

    }

     */

    @Override
    public AppUser getUser(String username) {
        log.info("Fetching user {}", username);

        return appUserRepository.findAppUserByUsername(username);
    }

    @Override
    public Collection<AppUser> getUsers() {
        log.info("Fetching all users");

        return appUserRepository.findAll();
    }

    public AppUser createNewUserFromJWT(Jwt principal){
        AppUser newAppUser = new AppUser();
        newAppUser.setId(principal.getClaimAsString("sub"));
        newAppUser.setEmail(principal.getClaimAsString("email"));
        newAppUser.setName(principal.getClaimAsString("name"));
        newAppUser.setUsername(principal.getClaimAsString("preferred_username"));
        newAppUser = appUserRepository.save(newAppUser);

        return newAppUser;
    }


}
