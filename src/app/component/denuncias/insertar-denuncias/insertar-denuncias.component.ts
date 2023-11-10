import { LugarHecho } from 'src/app/model/lugarHecho';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Denuncias } from 'src/app/model/denuncias';
import { DenunciasService } from 'src/app/service/denuncias.service';

@Component({
  selector: 'app-insertar-denuncias',
  templateUrl: './insertar-denuncias.component.html',
  styleUrls: ['./insertar-denuncias.component.css']
})
export class InsertarDenunciasComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  denuncia: Denuncias = new Denuncias();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaLugarHecho: LugarHecho[] = [];
  idLugarHechoSeleccionado: number = 0
  constructor(private dS: DenunciasService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
    });
    this.form = this.formBuilder.group({
      idDenuncias: [''],
      nameDenuncias: ['', Validators.required],
      FechaDenunciasHechos: ['', Validators.required],
      FechaDenunciasRegistro: ['', Validators.required],
      FechaDenunciasEmision: ['', Validators.required],
      LugarHecho: ['', Validators.required]
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.denuncia.idDenuncias = this.form.value.idDenuncias;
      this.denuncia.nameDenuncias = this.form.value.nameDenuncias;
      this.denuncia.FechaDenunciasHechos = this.form.value.FechaDenunciasHechos;
      this.denuncia.FechaDenunciasRegistro = this.form.value.FechaDenunciasRegistro;
      this.denuncia.FechaDenunciasEmision = this.form.value.FechaDenunciasEmision; 
      this.denuncia.idLugarHecho.idDenunciasLugarHecho = this.form.value.LugarHecho;

      if (this.edicion) {
        this.dS.Update(this.denuncia).subscribe(() => {
          this.dS.List().subscribe((data) => {
            this.dS.SetList(data);
          });
        });
      } else {
        this.dS.Insert(this.denuncia).subscribe((data) => {
          this.dS.List().subscribe((data) => {
            this.dS.SetList(data);
          });
        });
      }
      this.router.navigate(['Denuncia']);
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
