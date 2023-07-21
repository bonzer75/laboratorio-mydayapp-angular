import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private taskM: TasksService
  ) { }

  tasks: Task[] = []

  ngOnInit(): void {
    this.taskM.saveTask(this.tasks)
    //console.log()
  }

}
