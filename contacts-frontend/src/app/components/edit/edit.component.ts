import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  currentContact: Contact = new Contact();
  
  constructor(private fb:FormBuilder, private service: ContactService, private route: ActivatedRoute, 
    private router: Router) { 
    this.form = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required]
    })
  }


  ngOnInit(): void{
    this.findContact(this.route.snapshot.params['id']);
  }

  findContact(id: number): void {
    this.service.findById(id)
      .subscribe(
        data => {
          this.currentContact = data;
        });
  }

  updateContact():void {
    this.service.update(this.currentContact)
    .subscribe(response => {
      alert('Contacto actualizado');
      this.router.navigate(['/contacts']);
    });
  }
}
