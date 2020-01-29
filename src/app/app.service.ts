import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  
  getProgressBarData(): Observable<any>{
    let url = "http://pb-api.herokuapp.com/bars";
    return this.http.get(url);
  }
}
