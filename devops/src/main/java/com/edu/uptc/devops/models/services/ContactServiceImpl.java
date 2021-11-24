package com.edu.uptc.devops.models.services;

import java.util.Optional;


import com.edu.uptc.devops.models.entity.Contact;
import com.edu.uptc.devops.models.repository.IContactRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements IContactService {

    private final IContactRepository repository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Contact> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Contact> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public Contact save(Contact contact) {
        return repository.save(contact);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
    
}