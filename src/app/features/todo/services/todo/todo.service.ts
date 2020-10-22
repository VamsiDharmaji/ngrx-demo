import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from 'src/app/features/model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.api}/todos`;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllTodos() {
    return this.http.get<Todo[]>(this.apiUrl);
  }
  addTodo(todo: string) {
    return this.http.post<Todo>(this.apiUrl, { title: todo, completed: false });
  }

  deleteTodo(todoId: number) {
    return this.http.delete<Todo>(`${this.apiUrl}/${todoId}`, this.httpOptions);
  }

  markAsComplete(todo: Todo) {
    return this.http.patch<Todo>(
      `${this.apiUrl}/${todo.id}`,
      todo,
      // [{ op: 'replace', path: '/completed', value: true }],
      this.httpOptions
    );
  }
}
