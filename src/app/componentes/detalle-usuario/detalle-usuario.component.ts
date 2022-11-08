import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss'],
})
export class DetalleUsuarioComponent implements OnInit {
  @Input() data: any;
  @Output()
  marcarRojo = new EventEmitter<any>();
  @Output()
  marcarVerde = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}



  incompleto() {
    this.marcarRojo.emit(this.data.id);
  }

  completo() {
    this.marcarVerde.emit(this.data.id);
  }
}
