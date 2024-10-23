import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-template',
  templateUrl: './reference-template.component.html',
  styleUrls: ['./reference-template.component.scss']
})
export class ReferenceTemplateComponent {
  inpValue:any = 'John'
  getInputValue(val:any){
    this.inpValue = val.value
  }

  checkBoxValue:any = ''
  getCheckBoxValue(val:any){
    this.checkBoxValue = val.checked
  }

  redioValue:any = "";
  getRadioValue(val:any){
    this.redioValue = val
  }
}
