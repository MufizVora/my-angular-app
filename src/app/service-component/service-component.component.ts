import { Component } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.scss'],
  providers : [MessageServiceService]
})
export class ServiceComponentComponent {
  
  message:string[] = [];

  constructor(private messageService : MessageServiceService){
    this.message = messageService.getMessages()
  }
}
