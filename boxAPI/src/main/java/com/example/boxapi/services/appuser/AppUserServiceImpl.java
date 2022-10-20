package com.example.boxapi.services.appuser;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.AppUserDTORegistration;
import com.example.boxapi.repositories.AppUserRepository;
import com.example.boxapi.services.appuser.appuserExceptions.AppUserNotFoundException;

import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

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
    public AppUser update(AppUser entity) {
        return null;
    }

    @Override
    public AppUser add(String uid) {
        if (appUserRepository.existsById(uid))
            // TODO make new exception
            throw new AppUserNotFoundException(uid);
        AppUser newAppuser = new AppUser();
        newAppuser.setId(uid);


        return appUserRepository.save(newAppuser);
    }
    // TODO ble dette riktig?
    // TODO Packages ser ikke ut til å bli riktig når man endrer på bruker
    @Override
    public AppUser updateUser(AppUser entity, Jwt jwt) {
        entity.setId(jwt.getClaimAsString("sub"));
        entity.setEmail(jwt.getClaimAsString("email"));
        entity.setName(jwt.getClaimAsString("name"));
        entity.setRole(jwt.getClaimAsString("roles"));
        entity.setUsername(jwt.getClaimAsString("preferred_username"));
        return appUserRepository.save(entity);
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

    public AppUser createNewUserFromJWT(Jwt principal, AppUserDTORegistration appUserDTO){
        AppUser newAppUser = new AppUser();
        newAppUser.setId(principal.getClaimAsString("sub"));
        newAppUser.setEmail(principal.getClaimAsString("email"));
        newAppUser.setName(principal.getClaimAsString("name"));
        newAppUser.setRole(principal.getClaimAsString("roles"));
        newAppUser.setUsername(principal.getClaimAsString("preferred_username"));
        newAppUser.setBirthday(appUserDTO.getBirthday());
        newAppUser.setCountry(appUserDTO.getCountry());
        newAppUser.setPostal_code(appUserDTO.getPostal_code());
        newAppUser.setPhone_number(appUserDTO.getPhone_number());
        newAppUser = appUserRepository.save(newAppUser);

        return newAppUser;
    }


}
