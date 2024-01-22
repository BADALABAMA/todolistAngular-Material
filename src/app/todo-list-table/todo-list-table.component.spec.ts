import { ComponentFixture, TestBed } from '@angular/core/testing';

import TodoListTableComponent from './TodoListTableComponent';

describe('TodoListTableComponent', () => {
  let component: TodoListTableComponent;
  let fixture: ComponentFixture<TodoListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
