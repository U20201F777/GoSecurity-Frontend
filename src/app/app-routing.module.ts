import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { AyudaInsertarComponent } from './components/ayuda/ayuda-insertar/ayuda-insertar.component';
import { AyudaListarComponent } from './components/ayuda/ayuda-listar/ayuda-listar.component';
import { TipoCasoComponent } from './components/tipo-caso/tipo-caso.component';
import { TipoCasoInsertarComponent } from './components/tipo-caso/tipo-caso-insertar/tipo-caso-insertar.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { CiudadanoInsertarComponent } from './components/ciudadano/ciudadano-insertar/ciudadano-insertar.component';
import { CiudadanoListarComponent } from './components/ciudadano/ciudadano-listar/ciudadano-listar.component';
import { PoliciaComponent } from './components/policia/policia.component';
import { PoliciaInsertarComponent } from './components/policia/policia-insertar/policia-insertar.component';
import { PoliciaListarComponent } from './components/policia/policia-listar/policia-listar.component';

const routes: Routes = [{
  path: 'ayuda', component: AyudaComponent,
  children: [
    {path: 'nuevo', component: AyudaInsertarComponent},
    {path: 'listar', component: AyudaListarComponent}
  ]},
  {path: 'tipoCaso', component: TipoCasoComponent,
  children: [
    {path: 'nuevo', component: TipoCasoInsertarComponent}
  ]},
  {path: 'ciudadano', component: CiudadanoComponent,
  children: [
    {path: 'nuevo', component: CiudadanoInsertarComponent},
    {path: 'listar', component: CiudadanoListarComponent}
  ]},
  {path: 'policia', component: PoliciaComponent,
  children: [
    {path: 'nuevo', component: PoliciaInsertarComponent},
    {path: 'listar', component: PoliciaListarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
