import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent {
  constructor(public route: ActivatedRoute){}
}
