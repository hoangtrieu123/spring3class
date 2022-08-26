package com.example.testmodal.service.impl;

import com.example.testmodal.model.Environment;
import com.example.testmodal.repository.IEnvironmentRepository;
import com.example.testmodal.service.IEnvironmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class EnvironmentService implements IEnvironmentService {
    @Autowired
    public IEnvironmentRepository iEnvironmentRepository;
    @Override
    public Environment save(Environment environment) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Optional<Environment> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Environment> findAll() {
        return iEnvironmentRepository.findAll();
    }
}
