package com.example.boxapi.services.country;

import com.example.boxapi.models.Country;
import com.example.boxapi.repositories.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CountryServiceImpl implements CountryService{

    @Autowired
    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Country findById(String id) {
        return countryRepository.findById(id).get();
    }

    @Override
    public Collection<Country> findAll() {
        return countryRepository.findAll();
    }

    @Override
    public Country add(Country entity) {
        return countryRepository.save(entity);
    }

    @Override
    public Country update(Country entity) {
        return countryRepository.save(entity);
    }

    @Override
    public void deleteById(String s) {

    }


    @Override
    public void delete(Country entity) {

    }
}
