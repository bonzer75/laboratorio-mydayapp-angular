import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  saveTask(task: Task | Task[]) {
    localStorage.setItem("mydayapp-angular", JSON.stringify(task));
  }

  getTasks() {
    const token = localStorage.getItem("mydayapp-angular")
    if(token) {
      return token
    }
    return '{"error: not found"}'
  }
}
