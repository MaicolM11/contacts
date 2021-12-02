import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service: ContactService) { }

  ngOnInit(): void {
    
  }

  public acount = 1;

  newContact() {
    var contact: IContact;
    contact = {
      id: this.acount,
      firstName: (<HTMLInputElement>document.getElementById("firstName")).value,
      lastName: (<HTMLInputElement>document.getElementById("lastName")).value,
      email: (<HTMLInputElement>document.getElementById("email")).value,
      createAt: new Date()
    };
    this.service.add(contact).subscribe(response => {
      alert('Contacto creado!');
      window.location.reload();
    });
    this.cerrarForm();
    this.acount++;
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

}
