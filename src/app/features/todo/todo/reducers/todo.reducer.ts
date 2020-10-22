import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TodoActions from './../actions/todo.actions';
import { Todo } from 'src/app/features/model/todo';

export const TODO_FEATURE_STATE_KEY = 'todoes';

export interface TodoState extends EntityState<Todo> {
  // additional entities state properties
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
});

export const initialState: TodoState = todoAdapter.getInitialState({
  // additional entity state properties
});

export interface TodoPartialState {
  readonly [TODO_FEATURE_STATE_KEY]: TodoState;
}

export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodoSuccess, (state, action) =>
    todoAdapter.addOne(action.todo, state)
  ),
  on(TodoActions.upsertTodo, (state, action) =>
    todoAdapter.upsertOne(action.todo, state)
  ),
  on(TodoActions.addTodos, (state, action) =>
    todoAdapter.addMany(action.todos, state)
  ),
  on(TodoActions.upsertTodos, (state, action) =>
    todoAdapter.upsertMany(action.todos, state)
  ),
  on(TodoActions.updateTodo, (state, action) =>
    todoAdapter.updateOne(action.todo, state)
  ),
  on(TodoActions.updateTodos, (state, action) =>
    todoAdapter.updateMany(action.todos, state)
  ),
  on(TodoActions.deleteTodoSuccess, (state, action) =>
    todoAdapter.removeOne(action.id, state)
  ),
  on(TodoActions.deleteTodos, (state, action) =>
    todoAdapter.removeMany(action.ids, state)
  ),
  // on(TodoActions.loadTodos, (state, action) =>
  //   todoAdapter.setAll(action.todos, state)
  // ),
  on(TodoActions.clearTodos, (state) => todoAdapter.removeAll(state))
);
