package com.example.boxapi.services.packages;

import com.example.boxapi.models.Package;
import com.example.boxapi.models.dto.packageDTO.PackageDTO;
import com.example.boxapi.models.dto.packageDTO.PackageDTOGuest;
import com.example.boxapi.models.dto.packageDTO.PackageDTOStatus;
import com.example.boxapi.models.enums.Status;
import com.example.boxapi.repositories.PackageRepository;
import com.example.boxapi.services.packages.packageExceptions.PackageNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class PackageServiceImpl implements PackageService {

    private final PackageRepository packageRepository;

    @Override
    public Package findById(Integer id) throws PackageNotFoundException {
        return packageRepository
                .findById(id)
                .orElseThrow(() -> new PackageNotFoundException(id));
    }

    @Override
    public Collection<Package> findAll() {
        return packageRepository.findAll();
    }

    @Override
    public Package add(Package entity) {
        return packageRepository.save(entity);
    }

    @Override
    public Package update(Package entity) {
        return packageRepository.save(entity);
    }

    public Package updateStatus(Package entity){
        Package updatedPackage = findById(entity.getId());

        entity.setEmail(updatedPackage.getEmail());
        entity.setTotalSum(updatedPackage.getTotalSum());
        entity.setAppUser(updatedPackage.getAppUser());
        entity.setWeight(updatedPackage.getWeight());
        entity.setCountry(updatedPackage.getCountry());
        entity.setDate((updatedPackage.getDate()));
        entity.setReceiver_name(updatedPackage.getReceiver_name());
        entity.setColor(updatedPackage.getColor());


        return packageRepository.save(entity);


    }

    @Override
    public void deleteById(Integer integer) {
        packageRepository.deleteById(integer);
    }

    @Override
    public void delete(Package entity) {

    }

    @Override
    public Collection<Package> getPackages() {
        log.info("Fetching all packages");
        return packageRepository.findAll();
    }
    @Override
    public Collection<Package> findByStatus(Status status) {
        return packageRepository.findByStatus(status);
    }
}
