import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as fromTodos from './../reducers/todo.reducer';
import * as TodoSelectors from './../selectors/todo.selectors';

@Injectable()
export class TodoFacade {
  constructor(private store: Store<fromTodos.TodoPartialState>) {}
  pendingTodos$ = this.store.select(TodoSelectors.selectPendingTodos);
  completedTodos$ = this.store.select(TodoSelectors.selectCompletedTodos);
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
