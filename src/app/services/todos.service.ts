import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  saveTask(task: Todo[]) {
    localStorage.setItem("mydayapp-angular", JSON.stringify(task));
    return
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

  deleteTodo(id: string) {
    const list: Todo[] = this.getTasks()
    list.splice(parseInt(id), 1)
    this.saveTask(list)
    return
  }

  swapStatus(id:string) {
    const list: Todo[] = this.getTasks()
    list[parseInt(id)].completed = !list[parseInt(id)].completed
    this.saveTask(list)
    return
  }
}
