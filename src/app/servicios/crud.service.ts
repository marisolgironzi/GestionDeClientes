import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleados } from './modelos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/empleados';

  constructor(
    private conexionservicio:HttpClient
  ) {
  }

  agregarEmpleado(datosEmpleado:empleados):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertar=1",datosEmpleado);
  }
  consultarEmpleado(){
    return this.conexionservicio.get(this.API+"?listar=1");
  }
  borrarEmpleado(id:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?borrar=1",id);
  }
}
