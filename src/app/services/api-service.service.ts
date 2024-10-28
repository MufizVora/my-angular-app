import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';
import { LatestPrice, OrderBook, Students } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpclient : HttpClient) { }

/*   getApiData() : Observable<any[]> {
    return this.httpclient.get<any[]>(this.apiUrl)
  } */
  getApiData() : Observable<Users[]> {
    return this.httpclient.get<Users[]>(this.apiUrl)
  }
  getStudentData() : Observable<Students> {
    return this.httpclient.get<Students>('http://localhost:1111/students')
  }
  getOrderBookData() : Observable<OrderBook> {
    return this.httpclient.get<OrderBook>('http://localhost:1111/orderbook')
  }
  getLatestPriceData() : Observable<LatestPrice> {
    return this.httpclient.get<LatestPrice>('http://localhost:1111/latestprices')
  }
}
