import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TodolistService } from '../todos/todolist.service';
import { ITodos, Status } from '../todos/ITodos';

@Component({
  selector: 'app-todo-list-table',
  templateUrl: './todo-list-table.component.html',
  styleUrl: './todo-list-table.component.scss',
})
export class TodoListTableComponent implements AfterViewInit {
  todoList: ITodos[] = this.todoListService.getTodoList();
  displayedColumns: string[] = [
    'position',
    'description',
    'status',
    'date',
    'btns',
  ];
  dataSource = new MatTableDataSource<ITodos>(this.todoList);
  descriptionInput: string = '';
  editedTodo: string = '';
  status: Status = Status.ToDo;
  todo: ITodos = {
    date: new Date(),
    id: 0,
    description: '',
    status: this.status,
  };

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private todoListService: TodolistService
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  addTodo() {
    this.todo = {
      date: new Date(),
      id: this.todoListService.getId() + 1,
      description: this.descriptionInput,
      status: this.status,
    };

    this.todoListService.addNewTodo(this.todo);
    this.todoList = this.todoListService.getTodoList();
    this.dataSource.data = this.todoList;
    this.clearInputFields();
  }

  deleteTodo(todoId: number) {
    this.todoListService.deleteTodo(todoId);
    this.todoList = this.todoListService.getTodoList();
    this.dataSource.data = this.todoList;
  }

  editToDo(todoId: number, editTodo: string, editedTodoStatus: string) {
    this.todoListService.editTodo(todoId, editTodo, editedTodoStatus);
    this.todoList = this.todoListService.getTodoList();
    this.dataSource.data = this.todoList;
  }

  clearInputFields() {
    this.descriptionInput = '';
    this.status = Status.ToDo;
  }
}
