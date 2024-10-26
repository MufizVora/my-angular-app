import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.scss'],
  providers: [ApiServiceService]
})
export class ApiComponentComponent implements OnInit {

  apiData:any[] = [];

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
      next: (response) => {
        this.apiData = response;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}