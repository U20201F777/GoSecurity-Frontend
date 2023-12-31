import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Policia } from 'src/app/model/Policia';
import { PoliciaService } from 'src/app/service/policia.service';

@Component({
  selector: 'app-policia-insertar',
  templateUrl: './policia-insertar.component.html',
  styleUrls: ['./policia-insertar.component.css']
})
export class PoliciaInsertarComponent {
  form: FormGroup = new FormGroup({});
  policia: Policia = new Policia();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  constructor(
    private pS: PoliciaService,
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
      idPolicia: ['',],
      numeroPlacaPolicia: ['', Validators.required],
      fotoRostroPolicia: ['', Validators.required],
      fotoIdentPolicia: ['', Validators.required],
      rangoPolicia: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.policia.idPolicia = this.form.value.idPerson;
      this.policia.numeroPlacaPolicia = this.form.value.namePerson;
      this.policia.fotoRostroPolicia = this.form.value.emailPerson;
      this.policia.fotoIdentPolicia = this.form.value.genderPerson;
      this.policia.rangoPolicia = this.form.value.birthDatePerson;
      if (this.edicion) {
        this.pS.update(this.policia).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.policia).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['/components/policia']);
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
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idPolicia: new FormControl(data.idPolicia),
          numeroPlacaPolicia: new FormControl(data.numeroPlacaPolicia),
          fotoRostroPolicia: new FormControl(data.fotoRostroPolicia),
          fotoIdentPolicia:new FormControl(data.fotoIdentPolicia),
          rangoPolicia: new FormControl(data.rangoPolicia),
        });
      });
    }
  }
}
