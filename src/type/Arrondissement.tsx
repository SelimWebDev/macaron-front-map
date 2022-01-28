export type Arrondissement = {
    id: string;
    type: string;
    geometry: {
      type: string;
      coordinates: number[][][];
    };
    properties: {
      n_sq_co: number;
      perimetre: number;
      l_ar: string;
      surface: number;
      geom_x_y: [number];
      n_sq_ar: number;
      l_aroff: string;
      c_arinsee: number;
      c_ar: number;
    };
  }