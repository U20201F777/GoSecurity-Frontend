import { Ciudadano } from "./Ciudadano";
import { DenunciasTipificacion } from "./DenunciasTipificacion";
import { Comisaria } from "./comisaria";
import { DenunciasLugarHecho } from "./lugarHecho";

export class Denuncias {
  idDenuncias: number = 0;
  nameDenuncias: string = '';
  FechaDenunciasHechos: Date = new Date(Date.now());
  FechaDenunciasRegistro: Date = new Date(Date.now());
  FechaDenunciasEmision: Date = new Date(Date.now());
  idDenunciasLugarHecho: DenunciasLugarHecho=new DenunciasLugarHecho();
  idDenunciasTipificacion: DenunciasTipificacion=new DenunciasTipificacion();
  idCiudadano: Ciudadano=new Ciudadano();
  idComisaria:Comisaria=new Comisaria();
}
