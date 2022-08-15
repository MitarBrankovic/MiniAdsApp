package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class SearchAdsDto {

    private String name;
    private Double minValue;
    private Double maxValue;
    private String category;
    private Boolean isMine;
    private long userId;
}
