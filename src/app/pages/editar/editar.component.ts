import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  tareas: Tarea[] = [];
  index: number = -1;

  Formulario: FormGroup = this.fb.group({
    titulo: [, Validators.required],
    descripcion: [, Validators.required],
    vencimiento: [, Validators.required],
    completada: [false],
  });

  constructor(private ar: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.index = this.ar.snapshot.params['index'];
    if (localStorage.getItem('tareas') != null) {
      this.tareas = JSON.parse(localStorage.getItem('tareas')!);
      this.Formulario.patchValue(this.tareas[this.index]);
    }
  }

  editar() {
    this.tareas.splice(this.index, 1);
    this.tareas.push(this.Formulario.value);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    this.Formulario.reset();
    this.router.navigate(['tareas']);
  }

}
