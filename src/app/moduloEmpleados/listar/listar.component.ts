import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  empleados:any;
  constructor(
    public formulario: FormBuilder,
    private servicio: CrudService
  ) {}

  ngOnInit(): void {
    this.servicio.consultarEmpleado().subscribe(respuesta=>{
      console.log(respuesta);
      this.empleados=respuesta;
    });
  }
}
