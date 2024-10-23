import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss']
})
export class ClassStyleComponent {
  emp:any = {
    name: 'John Doe',
    designation: 'CEO & Founder',
    active: false,
    priority: 'normal', 
  };
}
