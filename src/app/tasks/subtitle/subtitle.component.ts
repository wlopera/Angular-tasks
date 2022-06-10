import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css'],
})
export class SubtitleComponent {
  // Realizo una inyeccion de dependencia
  constructor(private tasksService: TasksService) {}

  get amountTasks() {
    return this.tasksService.tasks.length;
  }
}
