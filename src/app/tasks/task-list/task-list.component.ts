import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getAll();
  }
  onRemove(taskId: Task['id']) {
    console.log('removing task', taskId);
  }
}
