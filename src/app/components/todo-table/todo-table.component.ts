import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../Todo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

  @Output() editEmitter = new EventEmitter
  @Output() deleteEmitter = new EventEmitter
  todos: Todo[] = [];

  constructor(private service: TodoService) {
  }

  ngOnInit(): void {
    this.service.getAllTodos().subscribe(value => this.todos = value)
  }


  onTodoSaved(todo: Todo) {
    this.todos.push(todo);
  }

  onDelete(todo: Todo) {
    console.log(`Deleted! ${todo.id}`)
    this.todos = this.todos.filter(value => todo.id !== value.id)
  }

  editTodo(todo: Todo) {
    this.editEmitter.emit(todo);
  }

  deleteTodo(todo: Todo) {
    this.deleteEmitter.emit(todo);
  }

  onUpdate(todo: Todo) {
    //Already bound from table to form not need update
    /*this.todos = this.todos.filter(value => todo.id !== value.id)
    this.todos.push(todo);*/
  }
}
