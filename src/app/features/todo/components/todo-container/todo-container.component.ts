import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/features/model/todo';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit {
  todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getAllTodos();
  }

  ngOnInit(): void {}
}
