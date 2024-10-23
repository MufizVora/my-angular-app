import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  name:String = "Mufiz Vora";

  image:String = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png";

  formValue:String = "Angular";

  outStock:boolean = true;

  hiddenItem:boolean = true;

  employee = {
    name: 'John Smith',
    position: 'Frontend Developer',
    department: 'IT'
  }
}
