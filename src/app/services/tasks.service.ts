import { Injectable } from '@angular/core';
import { Todo } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  saveTask(task: Todo | Todo[]) {
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
