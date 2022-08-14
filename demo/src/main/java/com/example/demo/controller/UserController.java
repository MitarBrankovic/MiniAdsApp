package com.example.demo.controller;

import com.example.demo.dto.UserRegistrationDto;
import com.example.demo.dto.security.LoginRequest;
import com.example.demo.dto.security.LoginResponse;
import com.example.demo.model.UserApp;
import com.example.demo.service.UserService;
import com.example.demo.validators.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping("/login")
    @GetMapping( produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) throws AuthenticationException {
        LoginResponse response = userService.login(request);
        if(response != null) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    @RequestMapping("/register")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity register(@RequestBody UserRegistrationDto dto){
        dto.setDateOfRegistration(LocalDateTime.now());
        if(Validator.isValidUserDto(dto)){
            userService.saveUser(dto);
            return new ResponseEntity(HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @GetMapping(path="/getUsers")
    public ResponseEntity<List<UserApp>> getUsers() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }
}
