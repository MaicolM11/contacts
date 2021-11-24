package com.edu.uptc.devops.models.controllers;

import java.util.Optional;

import com.edu.uptc.devops.models.entity.Contact;
import com.edu.uptc.devops.models.services.IContactService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class ContactController {
    
    private final IContactService service;
    
    @GetMapping
    private ResponseEntity<?> toList(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> getById(@PathVariable("id") Long id){
        Optional<Contact> findById = service.findById(id);
        if(findById.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    private ResponseEntity<?> save(@RequestBody Contact contact){
        return ResponseEntity.ok(service.save(contact));
    }

    @PostMapping("/{id}")
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

    @DeleteMapping
	public ResponseEntity<?> delete(@PathVariable Long id){
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}