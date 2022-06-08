import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [SubtitleComponent, ListTasksComponent, GridComponent],
  imports: [CommonModule],
  exports: [GridComponent],
})
export class TasksModule {}
