import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {
  email:String = 'abc@gmail.com';
  isChecked:Boolean = false;
  gender:String = 'Male';
  range:Number = 0;
}
