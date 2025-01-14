import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5128/user/login';

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = login;

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
