import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private baseUrl = 'http://localhost:8080/api/cliente'; 

  constructor(private http: HttpClient) {}

  getAllClienti(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  updateCliente(cli: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}`, cli);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
