import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComisariaComponent } from './components/comisaria/comisaria.component';
import { ListarComisariaComponent } from './components/comisaria/listar-comisaria/listar-comisaria.component';
import { InsertarComisariaComponent } from './components/comisaria/insertar-comisaria/insertar-comisaria.component';

const routes: Routes = [
  {
    path:'Comisaria', component:ComisariaComponent, children:[
      {
        path:'listar', component:ListarComisariaComponent
      },
      {
        path:'insertar', component:InsertarComisariaComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
