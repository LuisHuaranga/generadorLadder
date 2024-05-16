import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private urlApi = "http://127.0.0.1:8080";

  constructor(private http: HttpClient) {} 

  getData(): Observable<any> {
    const url = this.urlApi + "/users?page=2";
    return this.http.get(url);
  }

  sendPrompt(data: any): Observable<any> {
    const url = this.urlApi + "//sendPrompt";
    return this.http.post(url, data);
  }

}
