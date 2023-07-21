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

  tasks: Task[] = []

  ngOnInit(): void {
    this.tasksManager.saveTask(this.tasks)
    //console.log()
  }

}
