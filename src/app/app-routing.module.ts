import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './component/marca/marca.component';
import { ModeloComponent } from './component/modelo/modelo.component';
import { InsertarMarcaComponent } from './component/marca/insertar-marca/insertar-marca.component';
import { InsertarModeloComponent } from './component/modelo/insertar-modelo/insertar-modelo.component';
import { PertenenciaComponent } from './component/pertenencia/pertenencia.component';
import { InsertarPertenenciaComponent } from './component/pertenencia/insertar-pertenencia/insertar-pertenencia.component';


const routes: Routes = [
  {
    path: 'PertenenciaMarca',
    component: MarcaComponent,
    children: [{ path: 'insertar', component: InsertarMarcaComponent }],
  },

  {
    path: 'PertenenciaModelo',
    component: ModeloComponent,
    children: [{ path: 'insertar', component: InsertarModeloComponent }],
  },
  {
    path: 'Pertenencia',
    component: PertenenciaComponent,
    children: [
      { path: 'insertar', component: InsertarPertenenciaComponent },
      { path: 'ediciones/id ', component: InsertarPertenenciaComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
