import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tareas: Tarea[] = [];
  
  Formulario: FormGroup = this.fb.group({
    titulo:   [,Validators.required],
    descripcion: [, Validators.required],
    vencimiento: [, Validators.required],
    completada: [false],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  agregar(){
    if (localStorage.getItem('tareas') != null) {
      this.tareas = JSON.parse(localStorage.getItem('tareas')!);
    }
    this.tareas.push(this.Formulario.value);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    this.Formulario.reset();
    this.router.navigate(['tareas']);
  }
}


