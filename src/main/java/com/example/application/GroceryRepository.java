package com.example.application;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryRepository extends JpaRepository<GroceryItem, UUID> {
    
}
