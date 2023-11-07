import { TipoCaso } from "./TipoCaso";

export class SolicitarAyuda{
  idAyuda: number=0;
  fechaAyuda: Date=new Date(Date.now());
  idTipoCaso: TipoCaso=new TipoCaso();
}
