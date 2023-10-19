import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/interfaces/tarea';
import { CRUDService } from 'src/app/services/crud.service';


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

  constructor(private fb: FormBuilder, private router: Router, private crud: CRUDService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.crud.agregarDatos(this.Formulario.value);
    this.router.navigate(['tareas'])
  }
}


