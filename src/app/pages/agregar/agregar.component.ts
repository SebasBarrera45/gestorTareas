import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    titulo:   [,Validators.required],
    descripcion: [, Validators.required],
    vencimiento: [, Validators.required],
    completada: [false],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  agregar(){
    let tareas= JSON.parse(localStorage.getItem('tareas')!);
    tareas.push(this.Formulario.value);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
}


