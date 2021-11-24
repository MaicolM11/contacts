package com.edu.uptc.devops.models.services;

import java.util.Optional;

import com.edu.uptc.devops.models.entity.Contact;

public interface IContactService {
    
    public Iterable<Contact> findAll();

    public Optional<Contact> findById(Long id);

    public Contact save(Contact contact);
    
    public void deleteById(Long id);

}
