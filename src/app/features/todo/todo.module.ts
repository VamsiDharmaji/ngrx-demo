import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './state';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoContainerComponent, AddTodoComponent, TodoListComponent, TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducers, { metaReducers: fromTodo.metaReducers })
  ]
})
export class TodoModule { }
