import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { PoliciaComponent } from './components/policia/policia.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { TipoCasoComponent } from './components/tipo-caso/tipo-caso.component';
import { AyudaListarComponent } from './components/ayuda/ayuda-listar/ayuda-listar.component';
import { AyudaInsertarComponent } from './components/ayuda/ayuda-insertar/ayuda-insertar.component';
import { PoliciaListarComponent } from './components/policia/policia-listar/policia-listar.component';
import { PoliciaInsertarComponent } from './components/policia/policia-insertar/policia-insertar.component';
import { CiudadanoListarComponent } from './components/ciudadano/ciudadano-listar/ciudadano-listar.component';
import { CiudadanoInsertarComponent } from './components/ciudadano/ciudadano-insertar/ciudadano-insertar.component';
import { TipoCasoListarComponent } from './components/tipo-caso/tipo-caso-listar/tipo-caso-listar.component';
import { TipoCasoInsertarComponent } from './components/tipo-caso/tipo-caso-insertar/tipo-caso-insertar.component';
import { ComisariaComponent } from './components/comisaria/comisaria.component';
import { InsertarComisariaComponent } from './components/comisaria/insertar-comisaria/insertar-comisaria.component';
import { ListarComisariaComponent } from './components/comisaria/listar-comisaria/listar-comisaria.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { InsertarDenunciasComponent } from './components/denuncias/insertar-denuncias/insertar-denuncias.component';
import { ListarDenunciasComponent } from './components/denuncias/listar-denuncias/listar-denuncias.component';
import { EstadoubicacionComponent } from './components/estadoubicacion/estadoubicacion.component';
import { InsertarEstadoubicacionComponent } from './components/estadoubicacion/insertar-estadoubicacion/insertar-estadoubicacion.component';
import { LugarhechoComponent } from './components/lugarhecho/lugarhecho.component';
import { InsertarLugarhechoComponent } from './components/lugarhecho/insertar-lugarhecho/insertar-lugarhecho.component';
import { ListarLugarhechoComponent } from './components/lugarhecho/listar-lugarhecho/listar-lugarhecho.component';
import { TipificacionComponent } from './components/tipificacion/tipificacion.component';
import { ListarTipificacionComponent } from './components/tipificacion/listar-tipificacion/listar-tipificacion.component';
import { InsertarTipificacionComponent } from './components/tipificacion/insertar-tipificacion/insertar-tipificacion.component';
import { UbicacioncComponent } from './components/ubicacionc/ubicacionc.component';
import { ListarUbicacioncComponent } from './components/ubicacionc/listar-ubicacionc/listar-ubicacionc.component';
import { InsertarUbicacioncComponent } from './components/ubicacionc/insertar-ubicacionc/insertar-ubicacionc.component';
import { UbicacionpComponent } from './components/ubicacionp/ubicacionp.component';
import { ListarUbicacionpComponent } from './components/ubicacionp/listar-ubicacionp/listar-ubicacionp.component';
import { InsertarUbicacionpComponent } from './components/ubicacionp/insertar-ubicacionp/insertar-ubicacionp.component';

@NgModule({
  declarations: [
    AppComponent,
    AyudaComponent,
    AyudaListarComponent,
    AyudaInsertarComponent,
    PoliciaComponent,
    PoliciaListarComponent,
    PoliciaInsertarComponent,
    CiudadanoComponent,
    CiudadanoListarComponent,
    CiudadanoInsertarComponent,
    TipoCasoComponent,
    TipoCasoListarComponent,
    TipoCasoInsertarComponent,
    ComisariaComponent,
    InsertarComisariaComponent,
    ListarComisariaComponent,
    DenunciasComponent,
    InsertarDenunciasComponent,
    ListarDenunciasComponent,
    LugarhechoComponent,
    ListarLugarhechoComponent,
    InsertarLugarhechoComponent,
    TipificacionComponent,
    ListarTipificacionComponent,
    InsertarTipificacionComponent,
    UbicacioncComponent,
    ListarUbicacioncComponent,
    InsertarUbicacioncComponent,
    UbicacionpComponent,
    ListarUbicacionpComponent,
    InsertarUbicacionpComponent,
    EstadoubicacionComponent,
    InsertarEstadoubicacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
