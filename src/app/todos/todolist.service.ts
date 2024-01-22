import { Injectable } from '@angular/core';
import { ITodos } from './ITodos';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private todoList: ITodos[] = [];
  private currentId = this.todoList.length;

  constructor() {}
  public getId(): number {
    return this.currentId++;
  }
  public getTodoList() {
    return this.todoList;
  }

  public addNewTodo(todo: ITodos) {
    return this.todoList.push(todo);
  }
  public deleteTodo(todoId: number) {
    this.currentId--;
    return (this.todoList = this.todoList.filter((t) => t.id !== todoId));
  }
  public editTodo(
    todoId: number,
    editedTodoDesc: string,
    editedTodoStatus: any
  ) {
    const foundIndex = this.todoList.findIndex((t) => t.id === todoId);

    if (foundIndex !== -1) {
      this.todoList[foundIndex].description = editedTodoDesc;
      this.todoList[foundIndex].status = editedTodoStatus;
    }
  }
}
