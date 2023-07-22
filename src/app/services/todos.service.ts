import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  saveTask(task: Todo[]) {
    localStorage.setItem("mydayapp-angular", JSON.stringify(task));
  }

  getTasks() {
    const token = localStorage.getItem("mydayapp-angular")
    if(token) {
      return JSON.parse(token)
    }
    return '{"error: not found"}'
  }

  getTodoId() {
    const list: Todo[] = this.getTasks()
    return `${list.length}`
  }
}
