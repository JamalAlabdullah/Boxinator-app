package com.example.boxapi.services.packages;

import com.example.boxapi.models.Package;
import com.example.boxapi.models.enums.Status;
import com.example.boxapi.repositories.PackageRepository;
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
    public Package findById(Integer id) {
        return packageRepository.findById(id).get();
    }

    @Override
    public Collection<Package> findAll() {
        return null;
    }

    @Override
    public Package add(Package entity) {
        return null;
    }

    @Override
    public Package update(Package entity) {
        return null;
    }

    @Override
    public void deleteById(Integer integer) {

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
