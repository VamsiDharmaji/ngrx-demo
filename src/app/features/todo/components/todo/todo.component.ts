import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/features/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  //@Output() done: EventEmitter<number> = new EventEmitter();
  @Output() done: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  markForDelete(id: number) {
    this.delete.emit(id);
  }

  markAsDone(todo: Todo) {
    this.done.emit({ ...todo, completed: !todo.completed });
  }
}
