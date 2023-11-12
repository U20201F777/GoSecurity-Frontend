import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pertenencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pertenencia.component.html',
  styleUrl: './pertenencia.component.css'
})
export class PertenenciaComponent {
  constructor(public route:ActivatedRoute){};
}
