import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';


@NgModule({
  declarations: [TodoContainerComponent, AddTodoComponent, TodoListComponent, TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
