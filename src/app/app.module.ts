import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { EditarComponent } from './pages/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarComponent,
    TareasComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
