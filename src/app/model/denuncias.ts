import { Ciudadano } from "./Ciudadano";
import { Comisaria } from "./comisaria";
import { DenunciasLugarHecho } from "./lugarHecho";
import { DenunciasTipificacion } from "./tipificacion";

export class Denuncias {
  idDenuncias: number = 0;
  nameDenuncias: string = '';
  fechaDenunciasHechos: Date = new Date(Date.now());
  fechaDenunciasRegistro: Date = new Date(Date.now());
  fechaDenunciasEmision: Date = new Date(Date.now());
  idDenunciasLugarHecho: DenunciasLugarHecho = new DenunciasLugarHecho();
  idDenunciasTipificacion: DenunciasTipificacion = new DenunciasTipificacion();
  idCiudadano: Ciudadano = new Ciudadano();
  idComisaria: Comisaria = new Comisaria(); 
}
