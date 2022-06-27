import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url_api = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  crearContacto(user: User): Observable<any> {
    return this.http.post(`${this.url_api}/signup`, user)
  }

  autenticarse( userLogin:UserLogin): Observable<any> {
    return this.http.post(`${this.url_api}/signin`, userLogin)
  }
}
