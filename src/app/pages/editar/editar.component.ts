import { CRUDService } from './../../services/crud.service';
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

  constructor(private ar: ActivatedRoute, private fb: FormBuilder, private router: Router, private crud: CRUDService) { }

  ngOnInit(): void {
    this.index = this.ar.snapshot.params['index'];
    this.Formulario.patchValue(this.crud.obtenerDatos()[this.index]);
    }


  editar() {
    this.crud.actualizarDato(this.Formulario.value, this.index);
    this.router.navigate(['tareas']);
  }
}
