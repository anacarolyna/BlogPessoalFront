import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) 
  { }

  cadastrar (user: User): Observable <User>{

    return this.http.post <User> ('http://localhost:8080/cadastrar', user)

  }

}
