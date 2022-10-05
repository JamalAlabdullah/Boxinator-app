package com.example.boxapi.services.appuser;

import com.example.boxapi.models.AppUser;
import com.example.boxapi.repositories.AppUserRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AppUserServiceImpl implements AppUserService{

    private final AppUserRepository appUserRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @Override
    public AppUser findById(Integer id) {
        return (AppUser) appUserRepository.findById(id).get();
    }

    @Override
    public Collection<AppUser> findAll() {
        return null;
    }

    @Override
    public AppUser add(AppUser entity) {
        return null;
    }

    @Override
    public AppUser update(AppUser entity) {
        return null;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(AppUser entity) {

    }
}
