import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  get_llamarUsuario(){
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
  }


}
