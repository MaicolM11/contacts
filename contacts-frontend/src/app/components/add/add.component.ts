import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  photoSelection!: File;
  contactForm: FormGroup;

  constructor(private service: ContactService) { 
    this.contactForm = this.createFormGroup();
  }

  createFormGroup(){
    return new FormGroup({
      firstName: new FormControl('', [Validators.required , Validators.minLength(3) ]),
      lastName: new FormControl('', [Validators.required , Validators.minLength(3) ]),
      email: new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(30), 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  }

  ngOnInit(): void {
    
  }
  createWithPhoto() {
    var contact :Contact =  new Contact();
    contact.firstName = (<HTMLInputElement>document.getElementById("firstName")).value,
    contact.lastName = (<HTMLInputElement>document.getElementById("lastName")).value,
    contact.email =  (<HTMLInputElement>document.getElementById("email")).value
     
    this.service.addWithImage(contact, this.photoSelection).subscribe(response => {
      alert('Contacto creado!');
      window.location.reload();
    });
    this.cerrarForm();
  }

  newContact() {
    var contact :Contact =  new Contact();
    contact.firstName = (<HTMLInputElement>document.getElementById("firstName")).value,
    contact.lastName = (<HTMLInputElement>document.getElementById("lastName")).value,
    contact.email =  (<HTMLInputElement>document.getElementById("email")).value
     
    this.service.add(contact).subscribe(response => {
      alert('Contacto creado!');
      window.location.reload();
    });
    this.cerrarForm();
  }

  create() {
    if(this.contactForm.valid){
      if(!this.photoSelection){
        this.newContact()
      } else{
        this.createWithPhoto();
      }
    }else {
      alert("Revise los campos del formulario!!");
    }
  }

  abrirForm() {
    document.getElementById("overlay")?.classList.add("visible");
    document.getElementById("popup")?.classList.add("visible");
  }

  photoSelect(event : any) : void {
    this.photoSelection = event.target.files[0];

    if( this.photoSelection.type.indexOf('image') < 0){
      this.photoSelection = null;
    }
  }

  cerrarForm() {
    document.getElementById("overlay")?.classList.remove("visible");
    document.getElementById("popup")?.classList.remove("visible");
    (<HTMLInputElement>document.getElementById("firstName")).value = "";
    (<HTMLInputElement>document.getElementById("lastName")).value = "";
    (<HTMLInputElement>document.getElementById("email")).value = "";
  }

  get firstName() { 
    return this.contactForm.get('firstName') as FormArray 
  }
  get lastName() { return this.contactForm.get('lastName') as FormArray  }
  get email() { return this.contactForm.get('email') as FormArray }

}
