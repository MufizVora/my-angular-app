import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  employees:any = [{
    sNo:'',
    id:1,
    name:'John',
    age:23,
    department:'IT',
    skills : ['React', 'JavaScript']
  },
  {
    sNo:'',
    id:2,
    name:'Max',
    age:27,
    department:'IT',
    skills : ['HTML', 'CSS']

  },
  {
    sNo:'',
    id:3,
    name:'Robert',
    age:30,
    department:'IT',
    skills : ['Angular', 'JavaScript']

  },
  {
    sNo:'',
    id:4,
    name:'Smith',
    age:20,
    department:'IT',
    skills : ['VueJs', 'NodeJs']

  },
  {
    sNo:'',
    id:5,
    name:'Kane',
    age:21,
    department:'IT',
    skills : ['Python', 'Django']

  }
]

users:any = {
  user1 : 'John Doe',
  user2 : 'Jack Hammer',
  user3 : 'Smith Johnson',
  user4 : 'Ajaz Patel Gate No3',
}

username:string = 'Mufiz';
userLoggedIn:boolean = false;

grade:string = 'A';
}
