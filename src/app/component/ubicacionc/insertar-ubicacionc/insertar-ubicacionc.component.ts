
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UbicacionC } from 'src/app/model/ubicacionC';
import { UbicacionCService } from 'src/app/service/ubicacion-c.service';

@Component({
  selector: 'app-insertar-ubicacionc',
  templateUrl: './insertar-ubicacionc.component.html',
  styleUrls: ['./insertar-ubicacionc.component.css'],
})
export class InsertarUbicacioncComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  ubicacionC: UbicacionC = new UbicacionC();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  constructor(private uS: UbicacionCService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idUbicacionC: ['',],
      Departamento: ['', Validators.required],
      Ciudad: ['', Validators.required],
      Distrito: ['', [Validators.required]],
      Direccion: ['', Validators.required],
      });
}
aceptar(): void {
  if (this.form.valid) {
    this.ubicacionC.idUbicacionC = this.form.value.idUbicacionC;
    this.ubicacionC.Departamento = this.form.value.Departamento;
    this.ubicacionC.Ciudad = this.form.value.Ciudad;
    this.ubicacionC.Distrito = this.form.value.Distrito;
    this.ubicacionC.Direccion = this.form.value.Direcccion;
    if (this.edicion) {
      this.uS.Update(this.ubicacionC).subscribe(() => {
        this.uS.List().subscribe((data) => {
          this.uS.SetList(data);
        });
      });
    } else {
      this.uS.Insert(this.ubicacionC).subscribe((data) => {
        this.uS.List().subscribe((data) => {
          this.uS.SetList(data);
        });
      });
    }
    this.router.navigate(['UbicacionC']);
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
init() {
  if (this.edicion) {
    this.uS.ListId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        idUbicacionC: new FormControl(data. idUbicacionC),
        Departamento: new FormControl(data.Departamento),
        Ciudad: new FormControl(data.Ciudad),
        Distrito: new FormControl(data.Distrito),
        Direccion: new FormControl(data.Direccion),
      });
    });
  }
}
}
