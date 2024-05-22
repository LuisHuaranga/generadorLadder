import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import {NgxUiLoaderService} from 'ngx-ui-loader'


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private urlApi = "http://127.0.0.1:8080";

  constructor(private http: HttpClient, private loader: NgxUiLoaderService) { }


sendPrompt(data: any): Observable<any> {
    const url = `${this.urlApi}/sendPrompt`;
    this.loader.start();
    return this.http.post(url, data).pipe(
      map(response => {
        this.loader.stop();
        return response;
      }),
      catchError(error => {
        this.loader.stop();
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }

}
