package com.example.boxapi.services.packages.packageExceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PackageNotFoundException extends RuntimeException{

    public PackageNotFoundException(int id) {super("No package with id " + id + " exists");}

}
