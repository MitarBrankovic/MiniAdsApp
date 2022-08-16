package com.example.demo.dto;

import com.example.demo.model.AdStatus;
import com.example.demo.model.UserApp;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Data
public class NewAddDto {

    private String name;
    private String description;
    private String urlPhoto;
    private Double price;
    private AdStatus status;
    private String username;
    private String city;
}
