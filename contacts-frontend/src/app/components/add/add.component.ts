import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
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

  public acount = 1;


  newContact() {
    if(this.contactForm.valid){
      var contact: IContact;
      contact = {
        id: this.acount,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email,
        createAt: new Date()
      };
      console.log(this.contactForm.value.firstName)
      this.service.add(contact).subscribe(response => {
        alert('Contacto creado!');
        window.location.reload();
      });
      this.cerrarForm();
      this.acount++;
    }else {
      alert("Formulario invalido")
    }
    
  }

  abrirForm() {
    document.getElementById("overlay")?.classList.add("visible");
    document.getElementById("popup")?.classList.add("visible");
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
