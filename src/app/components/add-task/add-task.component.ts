import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string = "";
  day:string = "";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription:Subscription = new Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask=value)
  }

  onSubmit(){
    if(!this.text){
      alert("please add a task");
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    
    this.onAddTask.emit(newTask);
    this.clearForm();

  }
  
  clearForm(){
    this.text = '';
    this.day = ''; 
    this.reminder = false;
  }

  }
