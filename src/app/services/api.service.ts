import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Usuario} from '../modelos/usuarios'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions ={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }

  //Api cositas que poca gente sabe
  apiURL='https://my-json-server.typicode.com/victorrosendo/repoListadoAutos'
  ap1URL='https://my-json-server.typicode.com/victorrosendo/repoSeccionAsigSeccion'
  ap2URL='https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos'
  constructor(private http:HttpClient) { }

  cargarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.ap2URL + '/users')
  }
}
