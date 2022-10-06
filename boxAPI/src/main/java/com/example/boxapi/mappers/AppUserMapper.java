package com.example.boxapi.mappers;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.Role;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.services.appuser.AppUserService;
import com.example.boxapi.services.packages.PackageService;
import com.example.boxapi.services.role.RoleService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public abstract class AppUserMapper {

    @Autowired
    protected AppUserService appUserService;
    protected PackageService packageService;
    protected RoleService roleService;

    @Mapping(target = "roles", source = "roles", qualifiedByName = "mapRoleToId")
    @Mapping(target = "packages", source = "packages", qualifiedByName = "mapPackageToId")
    public abstract AppUserDTO packageToAppUserDTO(AppUser appUser);

    @Mapping(target = "roles", source = "roles", qualifiedByName = "mapIdToRole")
    @Mapping(target = "packages", source = "packages", qualifiedByName = "mapIdToPackage")
    public abstract AppUserDTO AppUserDTOtoPackage(AppUser appUser);


    @Named("mapPackageToId")
    Set<Integer> mapPackageToId(Set<Package> source) {
        if (source == null)
            return null;
        return source.stream()
                .map(m -> m.getPackage_id()).collect(Collectors.toSet());
    }

    @Named("mapIdToPackage")
    Set<Package> mapIdToPackage(Set<Integer> source) {
        return source.stream()
                .map(i -> packageService.findById(i))
                .collect(Collectors.toSet());
    }


    @Named("mapRoleToId")
    Set<Integer> mapRoleToId(Set<Role> source) {
        if (source == null)
            return null;
        return source.stream()
                .map(m -> m.getId()).collect(Collectors.toSet());
    }

    @Named("mapIdToRole")
    Set<Role> mapIdToRole(Set<Integer> source) {
        return source.stream()
                .map(i -> roleService.findById(i))
                .collect(Collectors.toSet());
    }
}