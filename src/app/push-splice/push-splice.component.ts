import { Component } from '@angular/core';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.scss']
})
export class PushSpliceComponent {
employees:any = [
  {
    srNo : '',
    name : 'John',
    department : 'IT'
  },
  {
    srNo : '',
    name : 'Max',
    department : 'IT'
  },
  {
    srNo : '',
    name : 'Smith',
    department : 'IT'
  },
  {
    srNo : '',
    name : 'Kane',
    department : 'IT'
  }
]

addEmployee(name:String, department:String){
  this.employees.push({
    name:name,
    department:department
  })  
}

removeEmployee(i:Number){
  this.employees.splice(i,1) /* Splice() Method takes two args : 1.Index and 2.Number of item to be removed */
}
}