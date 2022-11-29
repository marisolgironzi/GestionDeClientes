import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './moduloEmpleados/agregar/agregar.component';
import { EditarComponent } from './moduloEmpleados/editar/editar.component';
import { ListarComponent } from './moduloEmpleados/listar/listar.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'listarEmpleados'},
  {path:'listarEmpleados', component:ListarComponent},
  {path:'agregarEmpleado', component:AgregarComponent},
  {path:'editarEmpleado/:id', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }