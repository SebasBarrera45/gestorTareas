import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [

  { path: 'navbar', component: NavbarComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: "tareas", component: TareasComponent },
  { path: "editar/:index", component: EditarComponent },
  { path: "**", redirectTo: "tareas" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
