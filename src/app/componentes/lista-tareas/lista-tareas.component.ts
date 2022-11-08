import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServitareaService } from 'src/app/servicios/servitarea.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent implements OnInit {
  datos: any = [];
  personaseleccionada: any = [];
  idRojo:any;
  idVerde:any;
 dataSource: any = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['name', 'title', 'completed','usuario'];

  constructor(
    private serviciotarea: ServitareaService,
    private servicioUsuario: UsuariosService
  ) {}


  ngOnInit(): void {
    this.servicioUsuario.get_llamarUsuario().subscribe((data) => {
      this.listTarea(data);
      console.log(data);


    });
  }

  listTarea(usuarios: any) {
    this.serviciotarea.get_listatareas().subscribe((lista) => {
      console.log(lista);

      lista.forEach((p) => {
        // el p['nombre'] es para agregar una propieda a un array
        const nombre = usuarios.find((u: any) => u.id == p.userId);
        p['tarea'] = nombre;
      });
      this.dataSource = lista;

    });
  }

  detalle(id: any) {
    this.personaseleccionada = this.dataSource.find(
      (persona: any) => persona.id === id
    );
    console.log(this.personaseleccionada)

  }

  incompleto($event: any) {
    this.idRojo = $event
    console.log(this.idRojo);
  }

  completo($event: any) {
    this.idVerde = $event
    console.log(this.idVerde);
  }
}
