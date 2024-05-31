import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacetedSearchComponent } from './faceted-search/faceted-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { Task, TaskService } from './tasks/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FacetedSearchComponent,
    SearchResultsComponent,
    TasksComponent,
    TaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private taskService: TaskService) {}

  handleAddTask(value: Task) {
    console.log('addong', value);
    this.taskService.create(value);
  }
}
