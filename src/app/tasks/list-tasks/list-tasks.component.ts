import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent {
  constructor(private tasksService: TasksService) {
    console.log(tasksService);
  }

  get tasks() {
    return this.tasksService.tasks;
  }

  delete = (task: Task) => {
    this.tasksService.deleteTask(task.name);
  };
}
