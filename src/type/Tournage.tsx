export class Tournage {
    id: string;
    type: string;
    geometry: {
      type: string;
      coordinates: number[];
    };
    properties: {
      annee_tournage: string;
      coord_y: number;
      coord_x: number;
      type_tournage: string;
      nom_producteur: string;
      geo_point_2d: Array<number>;
      nom_tournage: string;
      nom_realisateur: string;
      date_fin: string;
      adresse_lieu: string;
      id_lieu: string;
      date_debut: string;
      ardt_lieu: string;
    };
  }