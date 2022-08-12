package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
public class UserRegistrationDto {
    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private String phoneNumber;

    private LocalDateTime dateOfRegistration;

    public UserRegistrationDto(){}

    public UserRegistrationDto(String username, String password, String firstName, String lastName, String phoneNumber, LocalDateTime dateOfRegistration) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.dateOfRegistration = dateOfRegistration;
    }
}
