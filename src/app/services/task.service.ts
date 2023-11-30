import { Injectable } from '@angular/core';
// import {TASKS} from '../mock-tasks';
import {Task} from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/v1/tasks/';


  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
}
