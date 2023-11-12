import { Ciudadano } from "./Ciudadano";
import { Comisaria } from "./comisaria";
import { DenunciasLugarHecho } from "./lugarHecho";
import { DenunciasTipificacion } from "./tipificacion";

export class Denuncias {
  idDenuncias: number = 0;
  nameDenuncias: string = '';
  FechaDenunciasHechos: Date = new Date(Date.now());
  FechaDenunciasRegistro: Date = new Date(Date.now());
  FechaDenunciasEmision: Date = new Date(Date.now());
  idLugarHecho: DenunciasLugarHecho = new DenunciasLugarHecho();
  idTipificacion: DenunciasTipificacion = new DenunciasTipificacion();
  idCiudadano: Ciudadano = new Ciudadano();
  idComisaria: Comisaria = new Comisaria(); 
}
