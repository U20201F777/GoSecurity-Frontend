import { Comisaria } from "./comisaria";
import { Notificacion } from "./notificacion";

export class Policia{
  idPolicia: number=0;
  numeroPlacaPolicia: string="";
  fotoRostroPolicia: string="";
  fotoIdentPolicia: string="";
  rangoPolicia: string="";
  idNotificacion: Notificacion=new Notificacion();
  idComisaria: Comisaria=new Comisaria();
}
