package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BiddingDto {

    private String username;
    private Double currentPrice;
    private Long adId;

}
