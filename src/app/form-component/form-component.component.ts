import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  /* This is the example of Template driven form */
  user: { name:string, email:string } = {
    name : '',
    email : '',
  }
  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value);
    }
  }

  validateEmail(): boolean {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(this.user.email);
  }
}