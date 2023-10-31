import { Roles } from "./Role";

export class Usuario {
  id: number=0
  username: string = "";
  password: string = "";
  enabled: boolean = true;
  role: Roles=new Roles();
}
