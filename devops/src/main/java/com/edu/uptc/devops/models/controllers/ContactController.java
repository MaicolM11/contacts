package com.edu.uptc.devops.models.controllers;

import java.io.IOException;
import java.util.Optional;

import com.edu.uptc.commonsmicroservices.controllers.CommonController;


import com.edu.uptc.devops.models.entity.Contact;
import com.edu.uptc.devops.models.services.IContactService;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ContactController extends CommonController<Contact, IContactService> {
    

	@GetMapping("/uploads/img/{id}")
	public ResponseEntity<?> viewPhoto(@PathVariable Long id){
		Optional<Contact> o = service.findById(id);
		if(o.isEmpty() || o.get().getPhoto() == null) {
			return ResponseEntity.notFound().build();
		}
		Resource image = new ByteArrayResource(o.get().getPhoto());
		return ResponseEntity.ok()
			.contentType(MediaType.IMAGE_JPEG)
			.body(image);
	}

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

    @PostMapping({ "/create-with-photo" })
    public ResponseEntity<?> createWithPhoto(Contact contact, @RequestParam MultipartFile photoFile) throws IOException {
        if (!photoFile.isEmpty()) {
            contact.setPhoto(photoFile.getBytes());
        }
        return super.save(contact);
    }

}