import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http"
import { ContactService } from './services/contact.service';
import { ContactComponent } from './components/contact/contact.component';

import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MatTableModule, BrowserAnimationsModule, MatButtonModule, MatCardModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
