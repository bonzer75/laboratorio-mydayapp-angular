import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private tasksManager: TodosService
  ) { }

  newTodo: Todo | null = null;
  tasks: Todo[] = []

  ngOnInit(): void {
    this.tasksManager.saveTask(this.tasks)
    //console.log()
  }
  
  addTodo(event: any) {
    const value = event.target.value;

    this.newTodo = {
     id: this.tasksManager.getTodoId(),
     title: value,
     completed: false 
    };

    const todoList = this.tasksManager.getTasks()
    todoList.push(this.newTodo)

    this.tasksManager.saveTask(todoList);
    this.newTodo = null;

    console.log("added sucessfully");
  }

}
