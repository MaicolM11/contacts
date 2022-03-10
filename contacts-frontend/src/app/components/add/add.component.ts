import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  photoSelection!: File;
  constructor(private service: ContactService) { }

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

    if(!this.photoSelection){
      this.newContact()
    } else{
      this.createWithPhoto();
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

}
