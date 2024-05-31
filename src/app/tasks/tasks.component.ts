import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  taskForm: FormGroup;
  @Output() addTaskEvent = new EventEmitter<Task>();

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: '',
      description: '',
    });
  }

  onSubmit(value: Task) {
    this.addTaskEvent.emit(value);
    this.taskForm.reset();
  }
}
