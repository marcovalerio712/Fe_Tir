import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  private baseUrl = 'http://localhost:8080/api/dipendente'; 

  constructor(private http: HttpClient) {}

  getAllDipendenti(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getDipendente(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  registerDipendente(dip: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, dip);
  }

  updateDipendente(dip: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}`, dip);
  }

  deleteDipendente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  login(credentials: any): Observable<any> {
    // Esegui la richiesta HTTP di login al server Java
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }
  
}
