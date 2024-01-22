import { Component } from '@angular/core';
import { TodolistService } from './todos/todolist.service';
import { ITodos } from './todos/ITodos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private todolistService: TodolistService) {}
  todoList: ITodos[] = this.todolistService.getTodoList();
}
