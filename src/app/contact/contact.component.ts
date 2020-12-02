import { Component, OnInit } from '@angular/core';
import { ContactI } from 'src/app/modele/contact';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;

  constructor() { }

  /**
   * Initialisation de l'objet contact
   */
  ngOnInit(): void {
    this.contact = {
      nom: '',
      email: '',
      sujet: '',
      message: '',
    };
  }
  suiviInput(): void {
    console.log(this.contact);
  }

  /**
   * Méthode appelé par le formulaire
   * @param f Les résultats du formulaires
   */
  soumissionFormulaire(f: NgForm): void{
    console.log('Formulaire envoyé');
    console.log('Données envoyées', f.value);
  }

}
