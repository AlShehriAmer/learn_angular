import {Injectable} from '@angular/core';
import {Todo} from "../Todo";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from "rxjs";
import {TodoFormComponent} from "../components/todo-form/todo-form.component";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = "http://localhost:5000/todo"

  constructor(private api: HttpClient) {
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.get<Todo[]>(this.url);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.api.post<Todo>(this.url, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const updateUrl = `${this.url}/${todo.id}`
    return this.api.put<Todo>(updateUrl, todo);
  }


  deleteTodo(todo: Todo): Observable<Todo> {
    const delUrl = `${this.url}/${todo.id}`
    return this.api.delete<Todo>(delUrl);
  }
}
