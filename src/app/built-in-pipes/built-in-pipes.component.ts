import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.scss'],
})
export class BuiltInPipesComponent {
  title:string = 'Pipes';
  curr:number = 1.81;
  date:number = Date.now();
}
