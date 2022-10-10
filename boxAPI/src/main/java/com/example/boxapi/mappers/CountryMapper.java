package com.example.boxapi.mappers;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.models.Country;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.AppUserDTO;
import com.example.boxapi.models.dto.CountryDTO;
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
public abstract class CountryMapper {

    @Autowired
    protected PackageService packageService;

    @Mapping(target = "packages", source = "packages", qualifiedByName = "mapPackageToId")
    public abstract CountryDTO countryToCountryDTO(Country country);
    public abstract Collection<CountryDTO> countryToCountryDTO(Collection<Country> countryDTOs);

    @Mapping(target = "packages", source = "packages", qualifiedByName = "mapIdToPackage")
    public abstract Country countryDTOtoCountry(CountryDTO countryDTO);

    @Named("mapPackageToId")
    Set<Integer> mapPackageToId(Set<Package> source) {
        log.info(" mapPackageToId: TULL Er det her det krøller seg)=");
        log.info(source + "Source mapPackageToId");
        if (source == null) {
            log.info(" XXXXX mapPackageToId: Er det her det krøller seg)=");
            return null;
        }
        return source.stream()
                .map(Package::getPackage_id).collect(Collectors.toSet());
    }

    @Named("mapIdToPackage")
    Set<Package> mapIdToPackage(Set<Integer> source) {
        if (source == null) {
            return null;}
        return source.stream()
                .map(i -> packageService.findById(i))
                .collect(Collectors.toSet());


    }

}
