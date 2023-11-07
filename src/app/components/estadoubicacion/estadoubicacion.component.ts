import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadoubicacion',
  templateUrl: './estadoubicacion.component.html',
  styleUrls: ['./estadoubicacion.component.css']
})
export class EstadoubicacionComponent {
 constructor(private route: ActivatedRoute){}
}
