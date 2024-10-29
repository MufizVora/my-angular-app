import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.scss']
})
export class ReactiveFormComponentComponent {
  userForm!:FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.userForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
    })
  }

  submitForm(){
    if (this.userForm.valid) {
      console.log(this.userForm.value); 
    }
  }

}
