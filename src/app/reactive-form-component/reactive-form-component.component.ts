import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

      /* This is how we can add sub values in single reactive form */
      address : this.formBuilder.group({
        street : ['', Validators.required],
        city : ['', Validators.required],
        state : ['', Validators.required],
      }),
      /* This is how we can add multiple values in single reactive form by storing it in array */
      phoneNumbers : this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(10)
        ]),
      ]),
    });
  }

  get phoneNumbers(){
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber(){
    this.phoneNumbers.push(
      this.formBuilder.control(
        '', [
          Validators.required,
          Validators.minLength(10)
        ] 
      ),
    )
  }

  removePhoneNumber(index:number){
      this.phoneNumbers.removeAt(index);
  }

  submitForm(){
    if (this.userForm.valid) {
      console.log(this.userForm.value); 
    }
  }
}
