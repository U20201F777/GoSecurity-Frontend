import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DenunciasComponent } from './component/denuncias/denuncias.component';
import { ComisariaComponent } from './component/comisaria/comisaria.component';
import { InsertarComisariaComponent } from './component/comisaria/insertar-comisaria/insertar-comisaria.component';
import { InsertarUbicacioncComponent } from './component/ubicacionc/insertar-ubicacionc/insertar-ubicacionc.component';
import { InsertarDenunciasComponent } from './component/denuncias/insertar-denuncias/insertar-denuncias.component';
import { UbicacioncComponent } from './component/ubicacionc/ubicacionc.component';
import { LugarhechoComponent } from './component/lugarhecho/lugarhecho.component';
import { InsertarLugarhechoComponent } from './component/lugarhecho/insertar-lugarhecho/insertar-lugarhecho.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'components',
    loadChildren: () => import('./component/component.module').then((m) => m.ComponentModule),
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
