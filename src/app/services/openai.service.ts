import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private urlApi = "http://127.0.0.1:8080";

  constructor(private http: HttpClient) { 
    console.log("servicio importado correctamente");
  } 

  getData(): Observable<any> {
    const url = this.urlApi + "/users?page=2";
    return this.http.get(url);
  }

  sendPrompt(data: any): Observable<any> {
    const url = this.urlApi + "//sendPrompt";
    return this.http.post(url, data);
  }

}
