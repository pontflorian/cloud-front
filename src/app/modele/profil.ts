export interface ProfilI {
  _id?: number | string;
  nom: string;
  prenom: string;
  specialites: Array<string>;
  promo: string;
  mail?: string;
  age: number;
  photo: string;
}

