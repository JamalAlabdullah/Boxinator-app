package com.example.boxapi.mappers;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.models.dto.AppUserDTOUpdate;
import com.example.boxapi.services.appuser.AppUserService;
import com.example.boxapi.services.packages.PackageService;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
@Slf4j //logging
public abstract class AppUserMapper {

    @Autowired
    protected AppUserService appUserService;
    @Autowired
    protected PackageService packageService;

    //Mapping(target = "roles", source = "roles", qualifiedByName = "mapRoleToId")
    @Mapping(target = "packages", source = "packages", qualifiedByName = "mapPackageToId")
    public abstract AppUserDTO appUserToAppUserDTO(AppUser appUser);

    //Mapping(target = "roles", source = "roles", qualifiedByName = "mapIdToRole")
    @Mapping(target = "packages", source = "packages", qualifiedByName = "mapIdToPackage")
    public abstract AppUser appUserDTOtoAppUser(AppUserDTO appUserDTO);
    public abstract AppUser appUserDTOtoAppUserUpdate(AppUserDTOUpdate appUserDTO);


    @Named("mapPackageToId")
    Set<Integer> mapPackageToId(Set<Package> source) {
        if (source == null) {
            return null;
        }
        return source.stream()
                .map(Package::getId).collect(Collectors.toSet());
    }

    @Named("mapIdToPackage")
    Set<Package> mapIdToPackage(Set<Integer> source) {
        if (source == null) {
            return null;
        }
        return source.stream()
                .map(i -> packageService.findById(i))
                .collect(Collectors.toSet());
    }

/*
    @Named("mapRoleToId")
    Set<Integer> mapRoleToId(Set<Role> source) {
        //if (source == null)
        //   return null;
        return source.stream()
                .map(m -> m.getId()).collect(Collectors.toSet());
    }

    @Named("mapIdToRole")
    Set<Role> mapIdToRole(Set<Integer> source) {
        return source.stream()
                .map(i -> roleService.findById(i))
                .collect(Collectors.toSet());
    }

 */

    public abstract Collection<AppUserDTO> appUsersToAppuserDTOs(Collection<AppUser> appUsersDTOs);

}