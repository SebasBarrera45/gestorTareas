import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { NavbarComponent } from './pages/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
