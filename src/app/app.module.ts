import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './component/login/login.component';
import { ComisariaComponent } from './component/comisaria/comisaria.component';
import { InsertarComisariaComponent } from './component/comisaria/insertar-comisaria/insertar-comisaria.component';
import { ListarComisariaComponent } from './component/comisaria/listar-comisaria/listar-comisaria.component';
import { DenunciasComponent } from './component/denuncias/denuncias.component';
import { InsertarDenunciasComponent } from './component/denuncias/insertar-denuncias/insertar-denuncias.component';
import { ListarDenunciasComponent } from './component/denuncias/listar-denuncias/listar-denuncias.component';;
import { LugarhechoComponent } from './component/lugarhecho/lugarhecho.component';
import { InsertarLugarhechoComponent } from './component/lugarhecho/insertar-lugarhecho/insertar-lugarhecho.component';
import { ListarLugarhechoComponent } from './component/lugarhecho/listar-lugarhecho/listar-lugarhecho.component';
import { UbicacioncComponent } from './component/ubicacionc/ubicacionc.component';
import { ListarUbicacioncComponent } from './component/ubicacionc/listar-ubicacionc/listar-ubicacionc.component';
import { InsertarUbicacioncComponent } from './component/ubicacionc/insertar-ubicacionc/insertar-ubicacionc.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComisariaComponent,
    InsertarComisariaComponent,
    ListarComisariaComponent,
    DenunciasComponent,
    InsertarDenunciasComponent,
    ListarDenunciasComponent,
    LugarhechoComponent,
    ListarLugarhechoComponent,
    InsertarLugarhechoComponent,
    UbicacioncComponent,
    ListarUbicacioncComponent,
    InsertarUbicacioncComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
