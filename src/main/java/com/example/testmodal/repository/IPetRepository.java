package com.example.testmodal.repository;

import com.example.testmodal.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPetRepository extends JpaRepository<Pet,Long> {
}
