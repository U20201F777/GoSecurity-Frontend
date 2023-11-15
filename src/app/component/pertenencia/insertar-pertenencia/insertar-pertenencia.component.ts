import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { marca } from 'src/app/model/marca';
import { modelo } from 'src/app/model/modelo';
import { pertenencia } from 'src/app/model/pertenencia';
import { PertenenciaService } from 'src/app/service/pertenencia.service';

@Component({
  selector: 'app-insertar-pertenencia',
  templateUrl: './insertar-pertenencia.component.html',
  styleUrls: ['./insertar-pertenencia.component.css']
})
export class InsertarPertenenciaComponent {
  form: FormGroup = new FormGroup({});
  pertenencia: pertenencia = new pertenencia();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaMarca: marca[] = [];
  idMarcaCSeleccionado: number = 0
  listaModelo: modelo[] = [];
  idModeloSeleccionado: number = 0
  constructor(
    private cS: PertenenciaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
    });
    this.form = this.formBuilder.group({
      idPertenencias: [''],
      namePertenencias: ['', Validators.required],
      AnioPertenencias: ['', Validators.required],
      EspecificacionesPertenencias: ['', Validators.required],
      ImagenPertenencias: ['', Validators.required],
      CodigoPertenencias: ['', Validators.required],
      SeriePertenencias: ['', Validators.required],
      idPertenenciasMarca: ['', Validators.required],
      idPertenenciasModelo: ['', Validators.required],

    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.pertenencia.idPertenencias = this.form.value.idPertenencias;
      this.pertenencia.namePertenencias = this.form.value.namePertenencias;
      this.pertenencia.AnioPertenencias = this.form.value.AnioPertenencias;
      this.pertenencia.EspecificacionesPertenencias = this.form.value.EspecificacionesPertenencias;
      this.pertenencia.ImagenPertenencias = this.form.value.ImagenPertenencias;
      this.pertenencia.CodigoPertenencias = this.form.value.CodigoPertenencias;
      this.pertenencia.SeriePertenencias = this.form.value.SeriePertenencias;
      this.pertenencia.idPertenenciasMarca.namePertenenciasMarca = this.form.value.marca;
      this.pertenencia.idPertenenciasModelo.namePertenenciasModelo = this.form.value.modelo;
      if (this.edicion) {
        this.cS.Update(this.pertenencia).subscribe(() => {
          this.cS.List().subscribe((data) => {
            this.cS.SetList(data);
          });
        });
      } else {
        this.cS.Insert(this.pertenencia).subscribe((data) => {
          this.cS.List().subscribe((data) => {
            this.cS.SetList(data);
          });
        });
      }
      this.router.navigate(['Pertenencia']);
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

