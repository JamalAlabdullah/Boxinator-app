package com.example.boxapi.mappers;

import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.PackageDTO;
import com.example.boxapi.services.packages.PackageService;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collection;

@Mapper(componentModel = "spring")
@Slf4j
public abstract class PackageMapper {

    @Autowired
    protected PackageService packageService;


    @Mapping(target = "appuser", source = "appuser.id", qualifiedByName = "mapPackageToId")
    public abstract  Collection<PackageDTO> packageToPackageDTO(Collection<Package> packageDTOs);
}
