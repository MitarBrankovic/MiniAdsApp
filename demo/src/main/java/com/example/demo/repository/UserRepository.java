package com.example.demo.repository;

import com.example.demo.model.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserApp, Long> {

    UserApp findByUsername(String username);

    UserApp findByUsernameAndPassword(String username, String password);
}
