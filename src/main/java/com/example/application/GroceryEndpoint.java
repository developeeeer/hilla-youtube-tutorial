package com.example.application;

import java.util.List;

import javax.annotation.Nonnull;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class GroceryEndpoint {

    private GroceryRepository repository;

    public GroceryEndpoint(GroceryRepository repository) {
        this.repository = repository;
    }

    public @Nonnull List<@Nonnull GroceryItem> findAll() {
        return repository.findAll();
    }

    public GroceryItem save(GroceryItem item) {
        return repository.save(item);
    }
}
