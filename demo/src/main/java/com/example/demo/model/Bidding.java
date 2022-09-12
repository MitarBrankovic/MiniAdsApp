package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Bidding {

    @Id
    @SequenceGenerator(name = "biddingIdSeqGen", sequenceName = "biddingIdSeqGen", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "biddingIdSeqGen")
    private Long id;

    @Column
    private String username;

    @Column
    private Double currentPrice;

    @Column
    private Long adId;

    @Column
    private LocalDateTime dateOfCreation;

    public Bidding() {}

    public Bidding(String username, Double currentPrice, Long adId, LocalDateTime dateOfCreation) {
        this.username = username;
        this.currentPrice = currentPrice;
        this.adId = adId;
        this.dateOfCreation = dateOfCreation;
    }
}
