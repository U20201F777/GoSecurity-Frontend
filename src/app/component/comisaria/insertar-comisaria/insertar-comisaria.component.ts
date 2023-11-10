import { Component, NgModule, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comisaria } from 'src/app/model/comisaria';
import { UbicacionC } from 'src/app/model/ubicacionC';
import { ComisariaService } from 'src/app/service/comisaria.service';

@Component({
  selector: 'app-insertar-comisaria',
  templateUrl: './insertar-comisaria.component.html',
  styleUrls: ['./insertar-comisaria.component.css'],
})
export class InsertarComisariaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  comisaria: Comisaria = new Comisaria();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaUbicacionC: UbicacionC[] = [];
  idUbicacionCSeleccionado: number = 0
  constructor(
    private cS: ComisariaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
    });
    this.form = this.formBuilder.group({
      idComisaria: [''],
      Nombre_c: ['', Validators.required],
      Telefono: ['', Validators.required],
      Direccion: ['', Validators.required],
      UbicacionC: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.comisaria.idComisaria = this.form.value.idComisaria;
      this.comisaria.Nombre_c = this.form.value.Nombre_c;
      this.comisaria.Telefono = this.form.value.Telefono;
      this.comisaria.Direccion = this.form.value.Direccion;
      this.comisaria.idUbicacionC.Distrito = this.form.value.UbicacionC;
      if (this.edicion) {
        this.cS.Update(this.comisaria).subscribe(() => {
          this.cS.List().subscribe((data) => {
            this.cS.SetList(data);
          });
        });
      } else {
        this.cS.Insert(this.comisaria).subscribe((data) => {
          this.cS.List().subscribe((data) => {
            this.cS.SetList(data);
          });
        });
      }
      this.router.navigate(['Comisaria']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
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
