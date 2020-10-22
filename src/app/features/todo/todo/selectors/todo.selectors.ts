import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  todoAdapter,
  TodoPartialState,
  TodoState,
  TODO_FEATURE_STATE_KEY,
} from '../reducers/todo.reducer';

// Lookup the 'Question' feature state managed by NgRx
export const todoFeatureSelector = createFeatureSelector<
  TodoPartialState,
  TodoState
>(TODO_FEATURE_STATE_KEY);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = todoAdapter.getSelectors(todoFeatureSelector);

export const selectPendingTodos = createSelector(selectAll, (todos) =>
  todos.filter((todo) => !todo.completed)
);

export const selectCompletedTodos = createSelector(selectAll, (todos) =>
  todos.filter((todo) => todo.completed)
);
