import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private tasksManager: TasksService
  ) { }

  newTodo: Task | null = null;
  tasks: Task[] = []

  ngOnInit(): void {
    this.tasksManager.saveTask(this.tasks)
    //console.log()
  }
  
  addTodo(event: any) {
    const value = event.target.value;

    this.newTodo = {
     id: "",
     title: value,
     completed: false 
    };

    this.tasksManager.saveTask(this.newTodo);
    this.newTodo = null;

    console.log("added sucessfully");
  }

}
