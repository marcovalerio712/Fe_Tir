import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommessaService {

  private baseUrl = 'http://localhost:8080/api/commessa'; 

  constructor(private http: HttpClient) {}

  getAllCommesse(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getCommessa(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  insertCommessa(com: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, com);
  }

  updateCommessa(com: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}`, com);
  }

  deleteCommessa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
 
  
}