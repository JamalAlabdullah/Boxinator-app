package com.example.boxapi.services.role;

import com.example.boxapi.models.Role;
import com.example.boxapi.repositories.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
//RequiredArgsConstructor
@Transactional
@Slf4j //logging
public class RoleServiceImpl implements RoleService{

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role findById(Integer id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public Collection<Role> findAll() {
        return null;
    }

    @Override
    public Role add(Role entity) {
        return null;
    }

    @Override
    public Role update(Role entity) {
        return null;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(Role entity) {

    }

    @Override
    public Role saveRole(Role role) {
        return null;
    }
}
