package com.edu.uptc.devops.models.controllers;

import java.util.Optional;

import com.edu.uptc.commonsmicroservices.controllers.CommonController;


import com.edu.uptc.devops.models.entity.Contact;
import com.edu.uptc.devops.models.services.IContactService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController extends CommonController<Contact, IContactService> {
    
    @PutMapping("/{id}")
	public ResponseEntity<?> edit(@RequestBody Contact contact, @PathVariable Long id){
		Optional<Contact> o = service.findById(id);
		if(o.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Contact contactDb = o.get();
		contactDb.setFirstName(contact.getFirstName());
		contactDb.setLastName(contact.getLastName());
		contactDb.setEmail(contact.getEmail());
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(contactDb));
	}

}