import { EstadoUbicacion } from "./EstadoUbicacion";

export class UbicacionP{
  idUbicacionP: number=0;
  Latitud: number=0;
  Longitud: number=0;
  Fecha: Date=new Date();
  estadoUbicacion:EstadoUbicacion=new EstadoUbicacion();
}
