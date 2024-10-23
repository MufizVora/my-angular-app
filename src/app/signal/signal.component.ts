import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent {

  // set signal
  firstName = signal("Mufiz");
  lastName = signal("Vora");

  // computed signal
  fullName = computed( () => this.firstName() + ' ' + this.lastName() )

  changeFirstName(fName:any){
    this.firstName.set(fName);
  }
  changeLastName(lname:any){
    this.lastName.set(lname);
  }

  // update signal
  quantity = signal<number>(1);

  addQuantity(){
    this.quantity.update(q => q+1)
  }

  minusQuantity(){
    this.quantity.update(q => q-1)
  }

  // mutate array signal
  constructor(private fb: FormBuilder){}
    employeeForm!: FormGroup;

    employees = signal([
      {name: "Mufiz", position:"Developer",department:"IT"},
      {name: "John", position:"Designer",department:"IT"},
      {name: "Smith", position:"Frontend",department:"IT"},
      {name: "Warner", position:"Backend",department:"IT"},
      {name: "Jack", position:"HR",department:"IT"},
    ]);

    empAdding = signal<boolean>(false);

    toggleAddBlock(){
      this.empAdding.update(status => !status);
    }

    ngOnInit(){
      this.employeeForm = this.fb.group({
        name: ['', Validators.required],
        position: ['', Validators.required],
        department: ['', Validators.required],
      });
    }

    onSubmit(){
      console.log(this.employeeForm.value); 
    }

    // mutate object property

    product = signal({
      name: 'Laptop',
      category: 'Electronics',
      price: '2000',
      rating: '4.5',
    });

    changeProductName(){
      this.product.mutate(product => product.name = 'Mobile')
    }
}