import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/features/model/todo';
import { TodoService } from '../../services/todo/todo.service';
import * as TodoActions from '../../todo/actions/todo.actions';
import { TodoFacade } from '../../todo/facades/todo.facades';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit {
  todos$: Observable<Todo[]>;

  pendingTodos$: Observable<Todo[]>;
  completedTodos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private todoFacade: TodoFacade
  ) {
    this.todos$ = this.todoService.getAllTodos();
  }

  ngOnInit(): void {
    // this.todoFacade.dispatch(
    //   TodoActions.upsertTodos({
    //     todos: [
    //       {
    //         id: 2,
    //         title: 'learn RXJS',
    //         completed: true,
    //       },
    //       {
    //         id: 3,
    //         title: 'learn NGRX',
    //         completed: true,
    //       },
    //       {
    //         title: 'Learn Testing',
    //         completed: false,
    //         id: 4,
    //       },
    //       {
    //         title: 'Learn ES6',
    //         completed: true,
    //         id: 5,
    //       },
    //     ],
    //   })
    //  );

    this.todoFacade.dispatch(TodoActions.loadTodos());

    this.pendingTodos$ = this.todoFacade.pendingTodos$;
    this.completedTodos$ = this.todoFacade.completedTodos$;
  }

  markForDelete(todoID: number) {
    // this.todoService.deleteTodo(todoID).subscribe();
    // this.todos$ = this.todoService.getAllTodos();

    this.todoFacade.dispatch(TodoActions.deleteTodo({ id: todoID }));
  }

  // markAsDone(id: number) {
  //   this.todoService.markAsComplete(id).subscribe();
  // }

  markAsDone(todo: Todo) {
    this.todoService.markAsComplete(todo).subscribe();
    this.todos$ = this.todoService.getAllTodos();
  }

  addTodo(todo: string) {
    this.todoFacade.dispatch(TodoActions.addTodo({ todoTitle: todo }));
  }
}
