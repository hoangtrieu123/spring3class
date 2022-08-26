package com.example.testmodal.service.impl;

import com.example.testmodal.model.Pet;
import com.example.testmodal.repository.IPetRepository;
import com.example.testmodal.service.IPetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class PetService implements IPetService {
    @Autowired
    public IPetRepository iPetRepository;
    @Override
    public Pet save(Pet pet) {
        return iPetRepository.save(pet);
    }

    @Override
    public void delete(Long id) {
        iPetRepository.deleteById(id);
    }

    @Override
    public Optional<Pet> findById(Long id) {
        return iPetRepository.findById(id);
    }

    @Override
    public List<Pet> findAll() {
        return iPetRepository.findAll();
    }
}
