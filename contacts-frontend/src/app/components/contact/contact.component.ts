import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SERVER, DEFAULT_PHOTO} from '../../constants/constants'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public lst : Contact[] = [];
  public headers = ["photo","firstName", "lastName", "email", "createdAt", "actions"];
  dataSource = new MatTableDataSource(this.lst);
  photoDefault = DEFAULT_PHOTO;
  server = SERVER;
  constructor(private service: ContactService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.lst = data;
      this.dataSource.data = this.lst;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
