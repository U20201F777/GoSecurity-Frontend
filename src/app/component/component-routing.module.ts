import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AyudaInsertarComponent } from './ayuda/ayuda-insertar/ayuda-insertar.component';
import { CiudadanoComponent } from './ciudadano/ciudadano.component';
import { CiudadanoInsertarComponent } from './ciudadano/ciudadano-insertar/ciudadano-insertar.component';
import { PoliciaComponent } from './policia/policia.component';
import { PoliciaInsertarComponent } from './policia/policia-insertar/policia-insertar.component';

const routes: Routes = [
  {
    path: 'Ayuda',
    component: AyudaComponent,
    children: [
      {path: 'nuevo', component: AyudaInsertarComponent},
      {path: 'ediciones/:id', component: AyudaInsertarComponent}
    ],
  },
  {
    path: 'ciudadano',
    component: CiudadanoComponent,
    children: [
      {path: 'nuevo', component: CiudadanoInsertarComponent},
      {path: 'ediciones/:id', component: CiudadanoInsertarComponent}
    ],
  },
  {
    path: 'policia',
    component: PoliciaComponent,
    children: [
      {path: 'nuevo', component: PoliciaInsertarComponent},
      {path: 'ediciones/:id', component: PoliciaInsertarComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
