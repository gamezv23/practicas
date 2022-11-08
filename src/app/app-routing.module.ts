import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';

const routes: Routes = [

  {path:'tareas',component:ListaTareasComponent},
  {path:'usuarios',component:DetalleUsuarioComponent},
  // {path: '**' , component : ListaTareasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
