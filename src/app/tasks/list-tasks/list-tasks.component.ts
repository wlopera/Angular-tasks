import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent {
  constructor(private tasksService: TasksService) {
    console.log(tasksService);
  }

  get tasks(){
    return this.tasksService.tasks
  }
}
