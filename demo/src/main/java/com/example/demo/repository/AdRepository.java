package com.example.demo.repository;

import com.example.demo.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdRepository extends JpaRepository<Ad, Long> {

    Ad findByName(String name);

    @Query("select a from Ad a where a.userApp.id = :id")
    List<Ad> findByUserId(@Param("id") Long id);
}
