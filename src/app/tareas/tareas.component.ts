import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  public tareas: Tarea[] = [];
  public filtrado = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('tareas') != null)
      this.tareas = JSON.parse(localStorage.getItem('tareas')!);
  }

  eliminar(index: number) {
    this.tareas.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  go2Editar(index: number) {
    this.router.navigateByUrl('editar/' + index);
  }

  cambiarEstatus(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  filtrar() {
    if (localStorage.getItem('tareas') != null)
      this.tareas = JSON.parse(localStorage.getItem('tareas')!);
    if (this.filtrado != 'null') {
      if (this.filtrado == 'true')
      this.tareas = this.tareas.filter((tarea) => {
        return tarea.completada == true;
      })
      if (this.filtrado == 'false')
      this.tareas = this.tareas.filter((tarea) => {
        return tarea.completada == false;
      })
    }

  }

}
