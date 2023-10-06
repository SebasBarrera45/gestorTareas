import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {path: "tareas", component: TareasComponent},
  {path: "editar/:tarea", component: TareasComponent},
  {path: "**", redirectTo: "tareas"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
