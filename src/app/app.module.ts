import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContactComponent } from './contact/contact.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PiedComponent,
    EtudiantComponent,
    Erreur404Component,
    ContactComponent,
    ListeEtudiantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
