import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public lst : IContact[] = [];
  public headers = ["firstName", "lastName", "email", "createdAt", "actions"];
  constructor(private service: ContactService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.lst = data;
    });
  }

  updateContact(id :number) {
      console.log("Actualizar");
  }

  deleteContact(id :number) {
    this.service.delete(id).subscribe(response => {
      this.ngOnInit();
      alert('Contacto eliminado!')
    });
  }


}
