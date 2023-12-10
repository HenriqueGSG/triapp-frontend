import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Calendar } from 'src/app/interfaces/calendar';
import { BehaviorSubject, Observable, Subject, takeUntil, tap } from 'rxjs';


const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YourAccessToken', // Adicione qualquer cabeçalho adicional necessário
});

@Injectable({
  providedIn: 'root',
})
export class CaledarService {



  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  getMonth(month: string): Observable<Calendar> {
    const url = `${this.BASE_URL}/calendar/${month}`;
    return this.http.get<Calendar>(url);
  }

  registerDay(funciId: string, day: string, month: string): Observable<Calendar> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YourAccessToken',
    });

    // Adicione os cabeçalhos à solicitação
    const options = { headers: headers };
    console.log(funciId, day, month)
    const url = `${this.BASE_URL}/calendar/register/${funciId}/${month}/${day}`
    console.log(url)
    return this.http.post<Calendar>(url, {}, options)

  }
  unregisterDay(funciId: string, day: string, month: string): Observable<Calendar> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YourAccessToken',
    });

    // Adicione os cabeçalhos à solicitação
    const options = { headers: headers };
    const url = `${this.BASE_URL}/calendar/unregister/${funciId}/${month}/${day}`
    // this.notifyEventSuccess('success');
    const response = this.http.post<Calendar>(url, {}, options)


    return response
  }





}
