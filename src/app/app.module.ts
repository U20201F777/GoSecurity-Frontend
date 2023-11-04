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

@NgModule({
  declarations: [
    AppComponent,
    CiudadanoComponent,
    PoliciaComponent,
    AyudaComponent,
    TipoCasoComponent,
    AyudaListarComponent,
    AyudaInsertarComponent,
    PoliciaListarComponent,
    PoliciaInsertarComponent,
    CiudadanoListarComponent,
    CiudadanoInsertarComponent,
    TipoCasoListarComponent
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
