import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { Signup } from '../models/Signup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5128/user/';

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = login;

    return this.http.post<any>(`${this.baseUrl}login`, body, { headers, withCredentials: true });
  }

  signup(signup: Signup): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = signup;

    return this.http.post<any>(`${this.baseUrl}signup`, body, {headers});
  }
}
