import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable()
export class TasksService {
  // ===> tasks: string[] = [];
  tasks: Array<Task> = [
    {
      name: 'Barrer',
      complete: false,
    },
    {
      name: 'Trapear',
      complete: false,
    },
    {
      name: 'Cocinar',
      complete: false,
    },
    {
      name: 'Leer',
      complete: false,
    },
  ];

  deleteTask = (taskName: string) => {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  };
}
