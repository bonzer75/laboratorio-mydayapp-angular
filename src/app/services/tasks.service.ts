import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  saveTask(task: Task) {
    localStorage.setItem("mydayapp-angular", JSON.stringify(task));
  }

  getTasks() {
    //const token = localStorage.get("mydayapp-angular")
    //return JSON.parse(token)
  }
}
