import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoActions from './../../todo/actions/todo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap((action) => this.todoService.getAllTodos()),
      map((todos) => TodoActions.upsertTodos({ todos }))
    );
  });

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      mergeMap((action) => this.todoService.addTodo(action.todoTitle)),
      map((todo) => TodoActions.addTodoSuccess({ todo }))
      // catchError((err) => TodoActions.addTodoFailure({ error: err }))
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap((action) =>
        this.todoService.deleteTodo(action.id).pipe(map(() => action.id))
      ),
      map((id) => TodoActions.deleteTodoSuccess({ id }))
      // catchError((err) => TodoActions.addTodoFailure({ error: err }))
    )
  );
}
