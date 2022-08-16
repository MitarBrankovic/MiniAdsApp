package com.example.demo.repository;

import com.example.demo.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdRepository extends JpaRepository<Ad, Long> {

    Ad findByName(String name);
}
