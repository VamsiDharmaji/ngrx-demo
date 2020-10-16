import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo, TodoListType } from 'src/app/features/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() listType = TodoListType.Pending;
  @Input() todos: Todo[];

  @Output() delete: EventEmitter<number> = new EventEmitter();
  // @Output() done: EventEmitter<number> = new EventEmitter();
  @Output() done: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  markForDelete(id: number) {
    this.delete.emit(id);
  }

  markAsDone(todo: Todo) {
    this.done.emit(todo);
  }
}
