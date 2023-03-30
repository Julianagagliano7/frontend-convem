import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apirequest } from './apirequest';

@Injectable({
  providedIn: 'root'
})
export class ConvemService {

  baseUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  enviarDadosParaAPI(userAnswer: string) : Observable<any> {
    var request = new Apirequest(); 
    request.userAnswer = userAnswer;
    return this.http.post(this.baseUrl + 'project', JSON.stringify(request), this.httpOptions);
  }
}
