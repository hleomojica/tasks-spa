import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks:Task[] = []

  constructor(private taskService: TaskService){
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

  addTask(task:Task){
    this.taskService.createTask(task).subscribe((task) => (this.tasks.push(task)) )
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(
      ()=> (this.tasks = this.tasks.filter((t)=> t._id !== task._id))
    );
  }

  toggleReminder(task: Task){
    console.log("emmit",task);
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
