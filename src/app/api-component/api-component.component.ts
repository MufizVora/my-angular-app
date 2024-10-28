import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Users } from '../interfaces/users.interface';
import { LatestPrice, OrderBook, Students } from '../interfaces/data.interface';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.scss'],
  providers: [ApiServiceService]
})
export class ApiComponentComponent implements OnInit {

  // apiData:any[] = [];
  apiData:Users[] = [];

  constructor(private apiService : ApiServiceService){

  }
/*   First way to fetch api
  ngOnInit() {
    this.apiService.getApiData().subscribe(
      (response) => {
        this.apiData = response
      },
      (error) => {
        console.error(error);
      }
    )
  } */
 /* Second way to fetch api */
  ngOnInit(){
    this.apiService.getApiData().subscribe({
      // next: (response:any[]) => {
      next: (response:Users[]) => {
        //This is how we can access api data by checking it's type
        //response[0].name;
        //response[1].username;
        this.apiData = response;
      },
      error: (error) => {
        console.error(error);
      }
    })
    this.apiService.getStudentData().subscribe({
      next: (response:Students) => {
        console.log(response);
      }
    })
    this.apiService.getOrderBookData().subscribe({
      next: (response:OrderBook) => {
        console.log(response);
      }
    })
    this.apiService.getLatestPriceData().subscribe({
      next: (response:LatestPrice) => {
        console.log(response);
      }
    })
  }
}