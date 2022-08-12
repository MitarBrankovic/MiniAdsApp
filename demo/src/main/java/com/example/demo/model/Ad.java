package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Ad {

    @Id
    @SequenceGenerator(name = "adIdSeqGen", sequenceName = "adIdSeqGen", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "adIdSeqGen")
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String urlPhoto;

    @Column
    private Double price;

    @Column
    @Enumerated(value = EnumType.STRING)
    private AdStatus status;

    //@OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="userId", referencedColumnName="id")
    private UserApp userApp;

    @Column
    private String city;

    @Column
    private LocalDateTime dateOfCreation;

    public Ad() {}

    public Ad(String name, String description, String urlPhoto, Double price, AdStatus status, UserApp userApp, String city, LocalDateTime dateOfCreation){
        this.name = name;
        this.description = description;
        this.urlPhoto = urlPhoto;
        this.price = price;
        this.status = status;
        this.userApp = userApp;
        this.city = city;
        this.dateOfCreation = dateOfCreation;
    }
}
