import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuappComponent } from './menuapp/menuapp.component';
import { AcceuilComponent } from './acceuil/acceuil.component'
import { FullCalendarModule } from '@fullcalendar/angular';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    MenuappComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
