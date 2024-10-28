import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  user: { name:string, email:string } = {
    name : '',
    email : '',
  }
  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value);
    }
  }
}