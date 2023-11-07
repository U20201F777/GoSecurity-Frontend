import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './component/ayuda/ayuda.component';
import { AyudaInsertarComponent } from './component/ayuda/ayuda-insertar/ayuda-insertar.component';
import { TipoCasoComponent } from './component/tipo-caso/tipo-caso.component';
import { TipoCasoInsertarComponent } from './component/tipo-caso/tipo-caso-insertar/tipo-caso-insertar.component';
import { CiudadanoComponent } from './component/ciudadano/ciudadano.component';
import { CiudadanoInsertarComponent } from './component/ciudadano/ciudadano-insertar/ciudadano-insertar.component';
import { PoliciaComponent } from './component/policia/policia.component';
import { PoliciaInsertarComponent } from './component/policia/policia-insertar/policia-insertar.component';
import { LoginComponent } from './component/login/login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
