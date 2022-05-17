package com.example.application;

import java.util.UUID;

import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;


@Entity
public class GroceryItem {
    @Id
    @GeneratedValue
    private UUID id;
    
    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getQuantity() {
        return quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
    @NotBlank
    private String name;
    @Min(value = 1)
    private Integer quantity;
    
}
