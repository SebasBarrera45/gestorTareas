import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  // private datos: any[] = [];

  // constructor() {
  //   this.cargaDatosDesdeLocalStorage();
  // }

  // public obtenerDatos() {
  //   return this.datos;
  // }

  // public agregarDatos(dato: any) {
  //   this.datos.push(dato);
  //   this.guardarDatosEnLocalStorage();
  // }

  // public actualizarDato(dato: any, index: number) {
  //   if (index >= 0 && index < this.datos.length) {
  //     this.datos[index] = dato;
  //     this.guardarDatosEnLocalStorage();
  //   }
  // }

  // public eliminarDato(index: number) {
  //   if (index >= 0 && index < this.datos.length) {
  //     this.datos.splice(index, 1);
  //     this.guardarDatosEnLocalStorage();
  //   }
  // }

  // private guardarDatosEnLocalStorage() {
  //   localStorage.setItem('tareas', JSON.stringify(this.datos));
  // }

  // private cargaDatosDesdeLocalStorage() {
  //   const datosString = localStorage.getItem('tareas');
  //   if (datosString) {
  //     this.datos = JSON.parse(datosString);
  //   }
  // }
  baseUrl = 'http://localhost/ws-crud/controller/';
  usd = 0;

  constructor(private http: HttpClient) { }

  // Método para realizar una solicitud HTTP GET
  get(model: string, action: string) {
    return this.http.get(`${this.baseUrl}${model}.php?option=${action}`);
  }

  // Método para realizar una solicitud HTTP POST con datos
  post(model: string, action: string, datos: any) {
    return this.http.post(`${this.baseUrl}${model}.php?option=${action}`, datos);
  }
}
