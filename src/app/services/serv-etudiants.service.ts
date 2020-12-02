import {Injectable} from '@angular/core';
import {ProfilI} from '../modele/profil';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServEtudiantsService {

  listeEtudiants: Array<ProfilI> = [];

  constructor(private http: HttpClient) {
    /**
     * Requete Ajax pour aller chercher les etudiants dans un fichier externe json
     * La requete elle meme est typée
     */
    this.http.get<Array<ProfilI>>(environment.ADR + '/assets/data/etudiants.json').subscribe(
      data => {
        console.log(data);
        this.listeEtudiants = data;
      }
    );
    // Peuplement de la variable NgOnInit
    // this.listeEtudiants = [];
  }
}
