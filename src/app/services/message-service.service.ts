import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  getMessages(){
    return ['message1', 'message2', 'message3', 'message4', 'message5'];
  }
}