import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { ComisariaComponent } from './components/comisaria/comisaria.component';
import { InsertarComisariaComponent } from './components/comisaria/insertar-comisaria/insertar-comisaria.component';
import { InsertarUbicacioncComponent } from './components/ubicacionc/insertar-ubicacionc/insertar-ubicacionc.component';
import { InsertarDenunciasComponent } from './components/denuncias/insertar-denuncias/insertar-denuncias.component';
import { UbicacioncComponent } from './components/ubicacionc/ubicacionc.component';
import { LugarhechoComponent } from './components/lugarhecho/lugarhecho.component';
import { InsertarLugarhechoComponent } from './components/lugarhecho/insertar-lugarhecho/insertar-lugarhecho.component';

const routes: Routes = [
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
      { path: 'insertar', component: InsertarUbicacioncComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
