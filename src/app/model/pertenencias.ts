import { SolicitarAyuda } from "./Ayuda";
import { Ciudadano } from "./Ciudadano";
import { PertenenciaModelo } from "./PertenenciaModelo";
import { PertenenciasTipo } from "./PertenenciasTipo";
import { UbicacionP } from "./UbicacionP";
import { PertenenciasColor } from "./pertenenciasColor";
import { PertenenciasMarca } from "./pertenenciasMarca";

export class Pertenencias{
  idPertenencias:number=0;
  namePertenencias: string="";
  AnioPertenencias: Date=new Date();
  EspecificacionesPertenencias: string="";
  ImagenPertenencias: string="";
  CodigoPertenencias: string="";
  SeriePertenencias: number=0;
  pertenenciasColor: PertenenciasColor=new PertenenciasColor();
  pertenenciasMarca: PertenenciasMarca=new PertenenciasMarca();
  pertenenciasModelo: PertenenciaModelo=new PertenenciaModelo();
  pertenenciasTipo: PertenenciasTipo= new PertenenciasTipo();
  idCiudadano: Ciudadano= new Ciudadano();
  idUbicacionP: UbicacionP=new UbicacionP();
  idAyuda:SolicitarAyuda= new SolicitarAyuda();
}
