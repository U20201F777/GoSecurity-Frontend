import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.css']
})
export class CiudadanoComponent {
  constructor(public route: ActivatedRoute) {}
}
