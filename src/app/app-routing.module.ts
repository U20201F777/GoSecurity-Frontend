import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { AyudaInsertarComponent } from './components/ayuda/ayuda-insertar/ayuda-insertar.component';
import { TipoCasoComponent } from './components/tipo-caso/tipo-caso.component';
import { TipoCasoInsertarComponent } from './components/tipo-caso/tipo-caso-insertar/tipo-caso-insertar.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { CiudadanoInsertarComponent } from './components/ciudadano/ciudadano-insertar/ciudadano-insertar.component';
import { PoliciaComponent } from './components/policia/policia.component';
import { PoliciaInsertarComponent } from './components/policia/policia-insertar/policia-insertar.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { ComisariaComponent } from './components/comisaria/comisaria.component';
import { InsertarComisariaComponent } from './components/comisaria/insertar-comisaria/insertar-comisaria.component';
import { InsertarUbicacioncComponent } from './components/ubicacionc/insertar-ubicacionc/insertar-ubicacionc.component';
import { InsertarDenunciasComponent } from './components/denuncias/insertar-denuncias/insertar-denuncias.component';
import { UbicacioncComponent } from './components/ubicacionc/ubicacionc.component';

const routes: Routes = [
  {
    path: 'Ayuda',
    component: AyudaComponent,
    children: [{ path: 'nuevo', component: AyudaInsertarComponent }],
  },
  {
    path: 'TipoCasos',
    component: TipoCasoComponent,
    children: [
      { path: 'nuevo', component: TipoCasoInsertarComponent },
      { path: 'ediciones/:id', component: TipoCasoInsertarComponent },
    ],
  },
  {
    path: 'ciudadano',
    component: CiudadanoComponent,
    children: [{ path: 'nuevo', component: CiudadanoInsertarComponent }],
  },
  {
    path: 'policia',
    component: PoliciaComponent,
    children: [{ path: 'nuevo', component: PoliciaInsertarComponent }],
  },
  {
    path: 'Denuncia',
    component: DenunciasComponent,
    children: [{ path: 'insertar', component: InsertarDenunciasComponent }],
  },
  {
    path: 'Comisaria',
    component: ComisariaComponent,
    children: [{ path: 'insertar', component: InsertarComisariaComponent }],
  },
  {
    path: 'UbicacionC',
    component: UbicacioncComponent,
    children: [
      { path: 'insertar', component: InsertarUbicacioncComponent },
      { path: 'ediciones/id', component: InsertarUbicacioncComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
