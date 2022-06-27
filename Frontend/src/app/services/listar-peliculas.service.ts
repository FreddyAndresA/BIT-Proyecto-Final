
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarPeliculasService {

id:any
  private API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/week?api_key=4451b033108a4d0d8d399e31162249a0&language=es-US'

  constructor( private http: HttpClient ) { }

  getTrendingMovies():Observable<any> {
      return this.http.get(this.API_URL_TRENDING)
  }

  consumiendo():Observable<any>{
  let idpeli :any = localStorage.getItem('idPelicula')
  idpeli = JSON.parse(idpeli)
    return this.http.get(`https://api.themoviedb.org/3/movie/${idpeli}/watch/providers?api_key=4451b033108a4d0d8d399e31162249a0`)
  }

  buscador():Observable<any>{
    let nombrePeli:any = localStorage.getItem('NombrePeli')
    nombrePeli = JSON.parse(nombrePeli)
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=4451b033108a4d0d8d399e31162249a0&language=es-US&query=${nombrePeli}`)
  }
}

