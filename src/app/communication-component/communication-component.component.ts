import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-communication-component',
  templateUrl: './communication-component.component.html',
  styleUrls: ['./communication-component.component.scss']
})
export class CommunicationComponentComponent {
  @Input() task!: string;
  @Output() taskDeleted = new EventEmitter<void>()

  onDelete(){
    this.taskDeleted.emit();
  }
}