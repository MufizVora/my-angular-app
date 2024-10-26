import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpclient : HttpClient) { }

  getApiData() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.apiUrl)
  }
}
