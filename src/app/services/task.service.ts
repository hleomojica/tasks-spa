import { Injectable } from '@angular/core';
import {Task} from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/v1/tasks';


  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }


}
