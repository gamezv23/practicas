import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServitareaService {

  constructor(private http: HttpClient) {
  }

get_listatareas(){


  return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos")


}


}
