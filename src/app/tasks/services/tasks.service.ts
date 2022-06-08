import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  // ===> tasks: string[] = [];
  tasks: Array<string> = ['Barrer', 'Trapear', 'Cocinar', 'leer'];
}
