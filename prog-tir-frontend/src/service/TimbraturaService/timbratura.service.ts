import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consuntivo } from 'src/models/consuntivo';

@Injectable({
  providedIn: 'root'
})
export class TimbraturaService {

  private baseUrl = 'http://localhost:8080/api/consuntivo'; 

  constructor(private http: HttpClient) {

  }

  getAllConsuntivi(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/my`);
  }

  createConsuntivo(con: any): Observable<Consuntivo> {
    return this.http.post<any>(`${this.baseUrl}`, con);
  }

  updateConsuntivo(con: any): Observable<Consuntivo> {
    return this.http.put<any>(`${this.baseUrl}`, con);
  }

  deleteConsuntivo(con: any): Observable<Consuntivo> {
    return this.http.delete<any>(`${this.baseUrl}/${con.id}`);
  }

}
