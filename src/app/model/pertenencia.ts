import { marca } from "./marca";
import { modelo } from "./modelo";

export class pertenencia{
  idPertenencias: number=0;
  namePertenencias: string="";
  AnioPertenencias: string="";
  EspecificacionesPertenencias: string="";
  ImagenPertenencias: string="";
  CodigoPertenencias: string="";
  SeriePertenencias: number=0;
  idPertenenciasMarca: marca= new marca();
  idPertenenciasModelo: modelo= new modelo();
}
