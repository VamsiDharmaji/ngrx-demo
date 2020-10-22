import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './todo/reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo/todo.effects';
import { TodoFacade } from './todo/facades/todo.facades';

@NgModule({
  declarations: [
    TodoContainerComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(fromTodo.TODO_FEATURE_STATE_KEY, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [TodoFacade],
})
export class TodoModule {}
