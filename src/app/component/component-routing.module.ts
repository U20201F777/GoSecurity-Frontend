import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AyudaInsertarComponent } from './ayuda/ayuda-insertar/ayuda-insertar.component';
import { CiudadanoComponent } from './ciudadano/ciudadano.component';
import { CiudadanoInsertarComponent } from './ciudadano/ciudadano-insertar/ciudadano-insertar.component';
import { PoliciaComponent } from './policia/policia.component';
import { PoliciaInsertarComponent } from './policia/policia-insertar/policia-insertar.component';
import { LugarhechoComponent } from './lugarhecho/lugarhecho.component';
import { InsertarLugarhechoComponent } from './lugarhecho/insertar-lugarhecho/insertar-lugarhecho.component';
import { InsertarUbicacioncComponent } from './ubicacionc/insertar-ubicacionc/insertar-ubicacionc.component';
import { InsertarComisariaComponent } from './comisaria/insertar-comisaria/insertar-comisaria.component';
import { UbicacioncComponent } from './ubicacionc/ubicacionc.component';
import { ComisariaComponent } from './comisaria/comisaria.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { InsertarDenunciasComponent } from './denuncias/insertar-denuncias/insertar-denuncias.component';

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
  {
    path: 'Denuncia',
    component: DenunciasComponent,
    children: [{ path: 'insertar', component: InsertarDenunciasComponent }],
  },
  {
    path: 'Comisaria',
    component: ComisariaComponent,
    children: [
      { path: 'insertar', component: InsertarComisariaComponent },
      { path: 'ediciones/id ', component: InsertarComisariaComponent },
    ],
  },
  {
    path: 'UbicacionC',
    component: UbicacioncComponent,
    children: [
      { path: 'insertar', component: InsertarUbicacioncComponent,
      { path: 'ediciones/id', component: InsertarUbicacioncComponent },
    ],
  },
  {
    path: 'LugarHecho',
    component: LugarhechoComponent,
    children: [{ path: 'insertar', component: InsertarLugarhechoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
