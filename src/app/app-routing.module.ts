import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {EtudiantComponent} from './etudiant/etudiant.component';
import {ContactComponent} from './contact/contact.component';
import {Erreur404Component} from './erreur404/erreur404.component';
import {ListeEtudiantsComponent} from './liste-etudiants/liste-etudiants.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'listeEtudiants', component: ListeEtudiantsComponent},
  {path: 'etudiant', component: EtudiantComponent},
  {path: 'etudiant/:etu', component: EtudiantComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
