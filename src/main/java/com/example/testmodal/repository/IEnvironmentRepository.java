package com.example.testmodal.repository;

import com.example.testmodal.model.Environment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEnvironmentRepository extends JpaRepository<Environment,Long> {
}
