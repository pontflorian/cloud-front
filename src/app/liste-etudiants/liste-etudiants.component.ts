import {Component, OnInit} from '@angular/core';
import {ProfilI} from '../modele/profil';
import {ServEtudiantsService} from '../services/serv-etudiants.service';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit {

  constructor(public servEtu: ServEtudiantsService) {
  }

  ngOnInit(): void {
  }

}
