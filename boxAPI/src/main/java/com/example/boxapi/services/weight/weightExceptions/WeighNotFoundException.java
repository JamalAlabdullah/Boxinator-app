package com.example.boxapi.services.weight.weightExceptions;

public class WeighNotFoundException extends RuntimeException{

    public WeighNotFoundException(int id) {super("No weight with id " + id + " exists");}
}
