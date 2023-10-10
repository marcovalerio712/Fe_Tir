import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assegnazione } from 'src/models/assegnazione';

@Injectable({
  providedIn: 'root'
})
export class AssegnazioneService {

  private baseUrl = 'http://localhost:8080/api/assegnazione'; 

  constructor(private http: HttpClient) { }

  getAssegnazioneById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getAllAssegnazioni(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  updateAssegnazione(ass: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}`, ass);
  }

  deleteAssegnazione(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  inserisciAssegnazione(assegnazione: Assegnazione): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, assegnazione);
  }

}
