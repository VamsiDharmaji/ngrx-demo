import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todo: string = null;
  constructor(private fb: FormBuilder, private todoSvc: TodoService) {}

  ngOnInit(): void {}

  addTodo() {
    this.todoSvc.addTodo(this.todo).subscribe();
    this.todo = '';
  }
}
