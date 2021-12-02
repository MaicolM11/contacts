import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../models/contact.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  API: string = "http://127.0.0.1:8080"
  constructor(private http: HttpClient) { }

  getAll(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.API}`);
  }

  delete(id:number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  findById(id: number): Observable<IContact> {
    return this.http.get<IContact>(`${this.API}/${id}`);
  }

  update(contact: IContact): Observable<IContact> {
    return this.http.put<IContact>(`${this.API}/${contact.id}`, contact);
  }
}
