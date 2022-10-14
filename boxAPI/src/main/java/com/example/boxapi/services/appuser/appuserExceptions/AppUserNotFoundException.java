package com.example.boxapi.services.appuser.appuserExceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class AppUserNotFoundException extends RuntimeException{

    public AppUserNotFoundException(int id) {super("No appuser with id " + id + " exists");}
}
