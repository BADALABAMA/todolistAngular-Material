import { Component, Input } from '@angular/core';
import { ITodos, Status } from './ITodos';
import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  @Input() todoList: ITodos[] = [];
  descriptionInput: string = '';
  editedTodo: string = '';
  status: Status = Status.ToDo;
  todos: ITodos = {
    date: new Date(),
    id: 0,
    description: '',
    status: this.status,
  };
  constructor(private todoListService: TodolistService) {}

  addTodo(decription: string) {
    this.todos = {
      date: new Date(),
      id: this.todoListService.getId() + 1,
      description: decription,
      status: this.status,
    };
    this.todoListService.addNewTodo(this.todos);
    this.descriptionInput = '';

    console.log(this.todoList);
  }
}
