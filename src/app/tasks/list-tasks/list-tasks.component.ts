import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent {
  // ===> tasks: string[] = [];
  tasks: Array<string> = ['Barrer', 'Trapear', 'Cocinar', 'leer'];
}
