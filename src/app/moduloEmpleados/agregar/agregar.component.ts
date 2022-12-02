import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formularioempleado: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private servicio: CrudService
    ) {
    this.formularioempleado = this.formulario.group(
      {
        id: [''],
        mail: [''],
        correo: ['']
      }
    )
  }

  ngOnInit(): void {
  }

  enviarInfo() {
    console.log("Botón clickeado");
    console.log(this.formularioempleado.value);
    this.servicio.agregarEmpleado(this.formularioempleado.value).subscribe();
  }
}
