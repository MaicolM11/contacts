package com.edu.uptc.devops.models.services;

import com.edu.uptc.commonsmicroservices.services.CommonServiceImpl;

import com.edu.uptc.devops.models.entity.Contact;
import com.edu.uptc.devops.models.repository.IContactRepository;

import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl extends CommonServiceImpl<Contact, IContactRepository> implements IContactService {
    
}