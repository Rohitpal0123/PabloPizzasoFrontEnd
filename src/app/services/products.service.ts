import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:5128/product';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {

    return this.http.get<any>(this.baseUrl, {  withCredentials: true });
  }
}
