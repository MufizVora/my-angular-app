import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  count:number = 0
  addCount(){
    this.count++;
  }

  value:any = "Smith";
  changeValue(val:any){
    this.value = val;
  }

  text:any = '';
  inputChange(event:any){    
    this.text = event.target.value;
  }

  dropValue:any = '';
  selectValue(event:any){
    this.dropValue = event.target.value;
  }

  onScroll(event:any){
    console.log(event);
  }
}
