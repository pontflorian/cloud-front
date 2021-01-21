import {Component, Input, OnInit} from '@angular/core';
import {ServEtudiantsService} from '../services/serv-etudiants.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ProfilI} from '../modele/profil';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  @Input()
  indexEtudiant = 0;
  newProfil: any;
  showEdit = false;

  constructor(public servEtu: ServEtudiantsService, private routeParameters: ActivatedRoute) { }

  ngOnInit(): void {

    this.newProfil = {
      nom: '',
      prenom: '',
      specialites: [],
      promo: '',
      mail: '',
      age: null,
      photo: '',
    };

    console.log(this.routeParameters);
    /**
     * Affiche les données présentés dans la route
     */
    this.routeParameters.params.subscribe(
      parameters => {
        console.log('Paramètres de la route', parameters);
        /**
         * Test si le parametre est dans la route, si tel est le cas on peuple la variable index
         */
        if (parameters.etu){
          this.indexEtudiant = +parameters.etu;
          console.log(this.indexEtudiant);
        }
      }
    );
  }

  soumissionFormulaire(f: NgForm): void {
    console.log(this.newProfil);
    this.servEtu.listeEtudiants[this.indexEtudiant] = this.newProfil;
    this.showEdit = false;
    this.newProfil = {
      nom: '',
      prenom: '',
      specialites: [],
      promo: '',
      mail: '',
      age: null,
      photo: '',
    };
  }

  editerEtudiant(): void {
    this.showEdit = true;
  }

  supprimerEtudiant(): void {
    // delete this.servEtu.listeEtudiants[this.indexEtudiant];
    this.servEtu.listeEtudiants.splice(this.indexEtudiant, 1);
  }

}
