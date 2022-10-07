package com.example.boxapi.services.packages;

import com.example.boxapi.models.Package;
import com.example.boxapi.repositories.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class PackageServiceImpl implements PackageService {

    private final PackageRepository packageRepository;

    public PackageServiceImpl(PackageRepository packageRepository) {
        this.packageRepository = packageRepository;
    }

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
}
