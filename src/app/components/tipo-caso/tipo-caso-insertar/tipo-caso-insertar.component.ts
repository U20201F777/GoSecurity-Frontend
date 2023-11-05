import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoCaso } from 'src/app/model/TipoCaso';
import { TipoCasoService } from 'src/app/service/tipo-caso.service';

@Component({
  selector: 'app-tipo-caso-insertar',
  templateUrl: './tipo-caso-insertar.component.html',
  styleUrls: ['./tipo-caso-insertar.component.css']
})
export class TipoCasoInsertarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  tipoCaso: TipoCaso = new TipoCaso();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  tc: { value: string; viewValue: string }[] = [
    { value: 'Leve', viewValue: 'Leve' },
    { value: 'Grave', viewValue: 'Grave' },
    { value: 'Muy grave', viewValue: 'Muy grave' },
  ];
  estado: { value: string; viewValue: string }[] = [
    { value: 'Atendido', viewValue: 'Atendido' },
    { value: 'No atendido', viewValue: 'No atendido' },
  ];
  constructor(
    private tS: TipoCasoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idTipoCaso: ['',],
      TipoCaso: ['', Validators.required],
      Estado: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.tipoCaso.idTipoCaso = this.form.value.idTipoCaso;
      this.tipoCaso.TipoCaso = this.form.value.TipoCaso;
      this.tipoCaso.Estado = this.form.value.Estado;
      if (this.edicion) {
        this.tS.update(this.tipoCaso).subscribe(() => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
      } else {
        this.tS.insert(this.tipoCaso).subscribe((data) => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
      }
      this.router.navigate(['TipoCasos']);
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
      this.tS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idTipoCaso: new FormControl(data.idTipoCaso),
          TipoCaso: new FormControl(data.TipoCaso),
          Estado: new FormControl(data.Estado),
        });
      });
    }
  }
}
