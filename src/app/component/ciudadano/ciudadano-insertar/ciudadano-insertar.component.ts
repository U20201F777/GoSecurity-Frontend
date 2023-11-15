import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudadano } from 'src/app/model/Ciudadano';
//import { Usuario } from 'src/app/model/User';
import { CiudadanoService } from 'src/app/service/ciudadano.service';

@Component({
  selector: 'app-ciudadano-insertar',
  templateUrl: './ciudadano-insertar.component.html',
  styleUrls: ['./ciudadano-insertar.component.css']
})
export class CiudadanoInsertarComponent {
  form: FormGroup = new FormGroup({});
  ciudadano: Ciudadano = new Ciudadano();
  mensaje: string = '';
  //listaUsuarios: Usuario[] = [];
  //idUsuarioSeleccionado:number=0
  constructor(
    private cS: CiudadanoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idAyuda: [''],
      fechaAyuda: ['', Validators.required],
      idTipoCaso: ['', Validators.required],
    });
    /*this.cS.List().subscribe((data) => {
      this.listaTipoCasos = data;
    });*/
  }
  aceptar() {
    if (this.form.valid) {
      this.ciudadano.idCiudadano = this.form.value.idAyuda;
      this.ciudadano.numeroCiudadano = this.form.value.fechaAyuda;
      //this.user.idUsuario = this.form.value.idUsuario;
      this.cS.insert(this.ciudadano).subscribe(data=>{
        this.cS.list().subscribe(data=>{
          this.cS.setList(data);
        })
      })
      this.router.navigate(['ciudadano'])
    } else {
      this.mensaje='Ingrese todos los campos!!'
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
}
