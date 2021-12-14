import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactService } from './services/contact.service';
import { ContactComponent } from './components/contact/contact.component';

import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule } from '@angular/material/grid-list'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MatTableModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule,
    MatFormFieldModule, MatGridListModule, MatToolbarModule, FormsModule,
    ReactiveFormsModule, MatPaginatorModule, HttpClientTestingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
