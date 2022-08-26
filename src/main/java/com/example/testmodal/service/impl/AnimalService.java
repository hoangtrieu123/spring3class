package com.example.testmodal.service.impl;

import com.example.testmodal.model.Animal;
import com.example.testmodal.repository.IAnimalRepository;
import com.example.testmodal.service.IAnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimalService implements IAnimalService {
    @Autowired
    public IAnimalRepository iAnimalRepository;

    @Override
    public Animal save(Animal animal) {
        return null;
    }

    @Override
    public void delete(Long id) {
    }

    @Override
    public Optional<Animal> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Animal> findAll() {
        return iAnimalRepository.findAll();
    }
}
