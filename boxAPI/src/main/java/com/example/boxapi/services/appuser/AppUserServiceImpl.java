package com.example.boxapi.services.appuser;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Role;
import com.example.boxapi.models.enums.RoleType;
import com.example.boxapi.repositories.AppUserRepository;
import com.example.boxapi.repositories.RoleRepository;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Service
//RequiredArgsConstructor
@Transactional
@Slf4j //logging
public class AppUserServiceImpl implements AppUserService{

    @Autowired
    private final AppUserRepository appUserRepository;
    private final RoleRepository roleRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository, RoleRepository roleRepository) {
        this.appUserRepository = appUserRepository;
        this.roleRepository = roleRepository;
    }

    public boolean checkIfUserExists(String email){
        return appUserRepository.existsByEmail(email);
    }

    public boolean assignRolesToUser(AppUser user, List<RoleType> roles){
        return false;
    }

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
    public AppUser findById(Integer id) {
        log.info("Hallo findById fungerer=");
        return appUserRepository.findById(id).get();
    }

    @Override
    public Collection<AppUser> findAll() {
        return null;
    }

    @Override
    public AppUser add(AppUser entity) {
        return appUserRepository.save(entity);
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
}
