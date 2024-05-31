import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'done' | 'ongoing' | 'paused' | 'not-started';
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[];

  constructor(private http: HttpClient) {
    this.tasks = [];
  }

  create(value: Task) {
    this.tasks.push({
      ...value,
      id: uuidv4(),
      status: 'not-started',
    });
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks', {
      responseType: 'json',
    });
  }
}
