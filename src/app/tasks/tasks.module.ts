import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { GridComponent } from './grid/grid.component';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [SubtitleComponent, ListTasksComponent, GridComponent],
  imports: [CommonModule],
  exports: [GridComponent],
  providers: [TasksService],
})
export class TasksModule {}
