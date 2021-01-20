import {Component, Input, OnInit} from '@angular/core';
import {ServEtudiantsService} from '../services/serv-etudiants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  @Input()
  indexEtudiant = 0;

  constructor(public servEtu: ServEtudiantsService, private routeParameters: ActivatedRoute) { }

  ngOnInit(): void {
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

}
