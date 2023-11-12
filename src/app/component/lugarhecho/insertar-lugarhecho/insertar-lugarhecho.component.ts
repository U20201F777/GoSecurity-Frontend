import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LugarHecho } from 'src/app/model/lugarHecho';
import { LugarHechoService } from 'src/app/service/lugar-hecho.service';

@Component({
  selector: 'app-insertar-lugarhecho',
  templateUrl: './insertar-lugarhecho.component.html',
  styleUrls: ['./insertar-lugarhecho.component.css']
})
export class InsertarLugarhechoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  lugarHecho: LugarHecho = new LugarHecho();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  constructor(private lS: LugarHechoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idDenunciasLugarHecho: [''],
      nameDenunciasLugarHecho: ['', Validators.required],
      DistritoDenuncia: ['', Validators.required],
      ProvinciaDenuncia: ['', Validators.required],
      LugarDenuncia: ['', Validators.required],
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.lugarHecho.idDenunciasLugarHecho = this.form.value.idDenunciasLugarHecho;
      this.lugarHecho.nameDenunciasLugarHecho = this.form.value.nameDenunciasLugarHecho;
      this.lugarHecho.DistritoDenuncia = this.form.value.DistritoDenuncia;
      this.lugarHecho.ProvinciaDenuncia = this.form.value.ProvinciaDenuncia;
      this.lugarHecho.LugarDenuncia = this.form.value.LugarDenuncia;
      if (this.edicion) {
        this.lS.Update(this.lugarHecho).subscribe(() => {
          this.lS.List().subscribe((data) => {
            this.lS.SetList(data);
          });
        });
      } else {
        this.lS.Insert(this.lugarHecho).subscribe((data) => {
          this.lS.List().subscribe((data) => {
            this.lS.SetList(data);
          });
        });
      }
      this.router.navigate(['/components/LugarHecho']);
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
      this.lS.ListId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idDenunciasLugarHecho: new FormControl(data.idDenunciasLugarHecho),
          nameDenunciasLugarHecho: new FormControl(data.nameDenunciasLugarHecho),
          DistritoDenuncia: new FormControl(data.DistritoDenuncia),
          ProvinciaDenuncia: new FormControl(data.ProvinciaDenuncia),
          LugarDenuncia: new FormControl(data.LugarDenuncia),
        });
      });
    }
  }

}
