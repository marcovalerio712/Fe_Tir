import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuoloService {
  private baseUrl = 'http://localhost:8080/api/ruolo'; 

  constructor(private http: HttpClient) {}

  getAllRuoli(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  updateRuolo(ruo: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}`, ruo);
  }

  deleteRuolo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
 
  
}
