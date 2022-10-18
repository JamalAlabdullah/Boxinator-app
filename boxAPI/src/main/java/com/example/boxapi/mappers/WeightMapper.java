package com.example.boxapi.mappers;

import com.example.boxapi.models.Country;
import com.example.boxapi.models.Package;
import com.example.boxapi.models.Weight;
import com.example.boxapi.models.dto.CountryDTO;
import com.example.boxapi.models.dto.WeightDTO;
import com.example.boxapi.services.packages.PackageService;
import com.example.boxapi.services.weight.WeightService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public abstract class WeightMapper {

    @Autowired
    protected WeightService weightService;

    @Mapping(target = "packages", source = "packages", qualifiedByName = "mapWeightToId")
    public abstract WeightDTO weightToWeightDTO(Weight weight);
    public abstract Collection<WeightDTO> weightToWeightDTO(Collection<Weight> weightDTOs);

    //Mapping(target = "packages", source = "packages", qualifiedByName = "mapIdToWeight")
    //public abstract Weight weightDTOtoWeight(WeightDTO weightDTO);

    @Named("mapWeightToId")
    Set<Integer> mapWeightToId(Set<Package> source) {
        if (source == null) {
            return null;
        }
        return source.stream()
                .map(Package::getId).collect(Collectors.toSet());
    }

    /*
    @Named("mapIdToWeight")
    Set<Weight> mapIdToWeight(Set<Integer> source) {
        if (source == null) {
            return null;}
        return source.stream()
                .map(i -> weightService.findById(i))
                .collect(Collectors.toSet());


    }

     */
}
