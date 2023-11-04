import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-caso',
  templateUrl: './tipo-caso.component.html',
  styleUrls: ['./tipo-caso.component.css']
})
export class TipoCasoComponent {
  constructor(public route: ActivatedRoute) {}
}
