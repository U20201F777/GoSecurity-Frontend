import { EstadoUbicacion } from './estadoUbicacion';
export class UbicacionP
{
idUbicacionP: number = 0;

  Latitud: number = 0;

  Longitud: number = 0;

  FechaDate = new Date(Date.now());

  EstadoUbicacion: EstadoUbicacion = new EstadoUbicacion();
}
