import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modelo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modelo.component.html',
  styleUrl: './modelo.component.css'
})
export class ModeloComponent {
  constructor(public route: ActivatedRoute){}
}
