package com.example.boxapi.services.role;

import com.example.boxapi.models.Role;
import com.example.boxapi.services.CrudService;

public interface RoleService extends CrudService<Role, Integer> {
    Role saveRole(Role role);
}
