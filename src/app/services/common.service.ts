import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getRecords(params:string): Observable<any> {
    const url: string =  params;
    return this.http.get<any>(url);
  }
}
