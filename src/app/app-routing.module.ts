import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [

    { path: 'navbar', component: NavbarComponent },
    { path: 'agregar', component: AgregarComponent },
    { path: '**', redirectTo: "tareas" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
