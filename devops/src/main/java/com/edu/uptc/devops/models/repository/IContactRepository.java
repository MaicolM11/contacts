package com.edu.uptc.devops.models.repository;

import com.edu.uptc.devops.models.entity.Contact;

import org.springframework.data.repository.CrudRepository;

public interface IContactRepository extends CrudRepository<Contact, Long> {
    
}
