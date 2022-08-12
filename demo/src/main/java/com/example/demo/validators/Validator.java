package com.example.demo.validators;

import com.example.demo.dto.UserRegistrationDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

public class Validator {

    private static PasswordConstraintValidator passwordConstraintValidator = new PasswordConstraintValidator();
    public static boolean isValidUserDto(UserRegistrationDto dto) {
        return  dto.getUsername() != ""
                && passwordConstraintValidator.isValid(dto.getPassword(), null)
                && dto.getFirstName() != ""
                && dto.getLastName() != ""
                && dto.getDateOfBirth().isBefore(LocalDateTime.now());
    }


    public static boolean isValidToken(Long userId, String token) {
        return userId >= 0 && token.length() == 32;
    }

}

