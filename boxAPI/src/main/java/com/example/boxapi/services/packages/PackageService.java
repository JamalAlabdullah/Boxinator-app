package com.example.boxapi.services.packages;

import com.example.boxapi.models.Package;
import com.example.boxapi.models.enums.Status;
import com.example.boxapi.services.CrudService;

import java.util.Collection;

public interface PackageService extends CrudService<Package, Integer> {

    Collection<Package> getPackages();

    Collection<Package> findByStatus(Status status);
}
