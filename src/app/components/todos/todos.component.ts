import {Component, ViewChild} from '@angular/core';
import {TodoTableComponent} from "../todo-table/todo-table.component";
import {Todo} from "../../Todo";
import {TodoService} from "../../services/todo.service";
import {TodoFormComponent} from "../todo-form/todo-form.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @ViewChild(TodoTableComponent) private table!: TodoTableComponent;
  @ViewChild(TodoFormComponent) private form!: TodoFormComponent;

  constructor(private service: TodoService) {
  }

  saveTodo(todo: Todo) {
    this.service.addTodo(todo).subscribe(value => this.table.onTodoSaved(todo))
  }

  deleteTodo(todo: Todo) {
    this.service.deleteTodo(todo).subscribe(value => this.table.onDelete(todo))
  }

  editTodo(todo: Todo) {
    this.form.onEdit(todo);
  }

  updateTodo(todo: Todo) {
    this.service.updateTodo(todo).subscribe(value => this.table.onUpdate(todo))
  }
}
