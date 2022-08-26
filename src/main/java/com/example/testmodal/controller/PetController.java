package com.example.testmodal.controller;

import com.example.testmodal.model.Animal;
import com.example.testmodal.model.Environment;
import com.example.testmodal.model.Pet;
import com.example.testmodal.service.impl.AnimalService;
import com.example.testmodal.service.impl.EnvironmentService;
import com.example.testmodal.service.impl.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/pets")
public class PetController {
    @Autowired
    public AnimalService animalService;
    @Autowired
    public EnvironmentService environmentService;
    @Autowired
    public PetService petService;

    @GetMapping
    public ResponseEntity<List<Pet>> findAllPet() {
        return new ResponseEntity<>(petService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/animal")
    public ResponseEntity<List<Animal>> findAllAnimal() {
        return new ResponseEntity<>(animalService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/environment")
    public ResponseEntity<List<Environment>> findAllEnvironment() {
        return new ResponseEntity<>(environmentService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Pet> createPet(@RequestBody Pet pet) {
        return new ResponseEntity<>(petService.save(pet), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(@RequestBody Pet pet) {
        Optional<Pet> updatePet = petService.findById(pet.getId());
        if (updatePet.isPresent()) {
            return new ResponseEntity<>(petService.save(pet), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Pet> deletePet(@PathVariable Long id) {
        petService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> findById(@PathVariable Long id) {
        Optional<Pet> findPet = petService.findById(id);
        if (findPet.isPresent()) {
            return new ResponseEntity<>(findPet.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
