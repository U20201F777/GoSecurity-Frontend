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
import { ComisariaComponent } from './components/comisaria/comisaria.component';
import { InsertarComisariaComponent } from './components/comisaria/insertar-comisaria/insertar-comisaria.component';
import { ListarComisariaComponent } from './components/comisaria/listar-comisaria/listar-comisaria.component';
import { DenunciasComponent } from './components/denuncias/denuncias.component';
import { InsertarDenunciasComponent } from './components/denuncias/insertar-denuncias/insertar-denuncias.component';
import { ListarDenunciasComponent } from './components/denuncias/listar-denuncias/listar-denuncias.component';;
import { LugarhechoComponent } from './components/lugarhecho/lugarhecho.component';
import { InsertarLugarhechoComponent } from './components/lugarhecho/insertar-lugarhecho/insertar-lugarhecho.component';
import { ListarLugarhechoComponent } from './components/lugarhecho/listar-lugarhecho/listar-lugarhecho.component';
import { UbicacioncComponent } from './components/ubicacionc/ubicacionc.component';
import { ListarUbicacioncComponent } from './components/ubicacionc/listar-ubicacionc/listar-ubicacionc.component';
import { InsertarUbicacioncComponent } from './components/ubicacionc/insertar-ubicacionc/insertar-ubicacionc.component';

@NgModule({
  declarations: [
    AppComponent,
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
