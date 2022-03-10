import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import {SERVER} from '../constants/constants'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  API: string = SERVER;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.API}`);
  }

  delete(id:number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  findById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.API}/${id}`);
  }

  update(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.API}/${contact.id}`, contact);
  }

  add(contact: Contact) {
    return this.http.post(`${this.API}`, contact);
  }

  addWithImage(contact: Contact, image:File) {
    const formData = new FormData();
      formData.append('firstName',contact.firstName);
      formData.append('lastName',contact.lastName);
      formData.append('email',contact.email);
      formData.append('photoFile', image);
      return this.http.post<Contact>(this.API + '/create-with-photo', formData);
  }

}
