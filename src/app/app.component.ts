import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';

  // Data to pass to child component
  parentData = 'Hello from Parent Component!';

  tasks: string[] = ['Task-1', 'Task-2', 'Task-3', 'Task-4', 'Task-5'];

  deleteTask(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
