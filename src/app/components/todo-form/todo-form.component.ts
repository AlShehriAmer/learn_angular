import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() saveEmmit = new EventEmitter;
  @Output() updateEmmit = new EventEmitter;
  @Output() deleteEmmit = new EventEmitter;

  todo: Todo = {
    name: "",
    description: ""
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  saveTodo() {
    if (this.todo.id !== undefined)
      this.updateEmmit.emit(this.todo);
    else
      this.saveEmmit.emit(this.todo);
  }


  deleteTodo() {
    this.deleteEmmit.emit(this.todo);
  }

  onEdit(todo: Todo) {
    this.todo = todo;
  }
}
