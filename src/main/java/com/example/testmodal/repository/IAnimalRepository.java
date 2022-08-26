package com.example.testmodal.repository;

import com.example.testmodal.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAnimalRepository extends JpaRepository<Animal,Long> {
}
