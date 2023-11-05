import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitarAyuda } from 'src/app/model/Ayuda';
import { TipoCaso } from 'src/app/model/TipoCaso';
import { AyudaService } from 'src/app/service/ayuda.service';
import { TipoCasoService } from 'src/app/service/tipo-caso.service';

@Component({
  selector: 'app-ayuda-insertar',
  templateUrl: './ayuda-insertar.component.html',
  styleUrls: ['./ayuda-insertar.component.css']
})
export class AyudaInsertarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  ayuda: SolicitarAyuda = new SolicitarAyuda();
  mensaje: string = '';
  listaTipoCasos: TipoCaso[] = [];
  idTipoCasoSeleccionado:number=0
  constructor(
    private tS: TipoCasoService,
    private aS: AyudaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idAyuda: ['', Validators.required],
      fechaAyuda: ['', Validators.required],
      idTipoCaso: ['', Validators.required],
    });
    this.tS.list().subscribe((data) => {
      this.listaTipoCasos = data;
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.ayuda.idAyuda = this.form.value.nameTask;
      this.ayuda.fechaAyuda = this.form.value.startDateTaks;
      this.ayuda.idTipoCaso = this.form.value.endDateTask;
      this.aS.Insert(this.ayuda).subscribe(data=>{
        this.aS.List().subscribe(data=>{
          this.aS.SetList(data);
        })
      })
      this.router.navigate(['Ayuda'])
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
