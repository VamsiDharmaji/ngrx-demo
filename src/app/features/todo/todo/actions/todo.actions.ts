import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Todo } from 'src/app/features/model/todo';

export const loadTodos = createAction('[Todo/API] Load Todos');

export const addTodo = createAction(
  '[Todo/API] Add Todo',
  props<{ todoTitle: string }>()
);

export const addTodoSuccess = createAction(
  '[Todo/API] Add Todo Success',
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  '[Todo/API] Add Todo Failure',
  props<{ error: any }>()
);

export const upsertTodo = createAction(
  '[Todo/API] Upsert Todo',
  props<{ todo: Todo }>()
);

export const addTodos = createAction(
  '[Todo/API] Add Todos',
  props<{ todos: Todo[] }>()
);

export const upsertTodos = createAction(
  '[Todo/API] Upsert Todos',
  props<{ todos: Todo[] }>()
);

export const updateTodo = createAction(
  '[Todo/API] Update Todo',
  props<{ todo: Update<Todo> }>()
);

export const updateTodos = createAction(
  '[Todo/API] Update Todos',
  props<{ todos: Update<Todo>[] }>()
);

export const deleteTodo = createAction(
  '[Todo/API] Delete Todo',
  props<{ id: number }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo/API] Delete Todo Success',
  props<{ id: number }>()
);


export const deleteTodos = createAction(
  '[Todo/API] Delete Todos',
  props<{ ids: string[] }>()
);

export const clearTodos = createAction('[Todo/API] Clear Todos');
