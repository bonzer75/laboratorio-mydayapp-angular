import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private manager: TodosService
  ) { }

  newTodo: Todo | null = null;
  allTodos: Todo[] = this.manager.getTasks();

  ngOnInit(): void {
    this.manager.saveTask([])
    //console.log()
  }

  addTodo(event: any) {
    const value = event.target.value;

    this.newTodo = {
     id: this.manager.getTodoId(),
     title: value,
     completed: false 
    };

    const todoList = this.manager.getTasks()
    todoList.push(this.newTodo)

    this.manager.saveTask(todoList);
    this.allTodos = this.manager.getTasks();    
  }

}
