import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()
task!: Task;

@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

onDelete(task: Task){
  this.onDeleteTask.emit(task);
}

onToggle(task: Task){
  this.onToggleTask.emit(task);
}

faTimes=faTimes;
}
