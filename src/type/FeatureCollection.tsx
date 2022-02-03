import { Arrondissement } from "./Arrondissement";
import { Tournage } from "./Tournage";

export class FeatureCollection {
    type: string;
    features: Arrondissement[] | Tournage[]
  }