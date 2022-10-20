package com.example.boxapi.mappers;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.PackageDTO;
import com.example.boxapi.models.dto.PackageDTOGuest;
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
@Slf4j
public abstract class PackageMapper {

    @Autowired
    protected PackageService packageService;
    @Autowired
    protected AppUserService appUserService;


    @Mapping(target = "appUser", source = "appUser.id")//, qualifiedByName = "mapAppuserToId")
    @Mapping(target = "country", source = "country.id")
    @Mapping(target = "weight", source = "weight.id")
    public abstract  PackageDTO packageToPackageDTO(Package package1);
    //public abstract PackageDTOGuest packageToPackageDTOGuest(Package package2);
    public abstract  Collection<PackageDTO> packagesToPackageDTOs(Collection<Package> packageDTOs);

    @Mapping(target = "appUser.id", source = "appUser") //, qualifiedByName = "mapIdToAppuser")
    @Mapping(target = "country.id", source = "country")
    @Mapping(target = "weight.id", source = "weight")
    public abstract Package packageDTOtoPackage(PackageDTO packageDTO);

    @Mapping(target = "country.id", source = "country")
    @Mapping(target = "weight.id", source = "weight")
    public abstract Package packageDTOtoPackage(PackageDTOGuest packageDTOGuest);
    public abstract  Collection<PackageDTO> packageDTOsTopackages(Collection<PackageDTO> packages);





}
