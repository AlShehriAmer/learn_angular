https://www.youtube.com/watch?v=3dHNOWTI7H8&ab_channel=TraversyMedia

### Install

#### Global install 
`sudo npm i -g @angular/cli`

#### No Global install only create the project
`npm init @angular myApp`

#### Create procject wit ng
`ng new myApp`

#### Create Component
`ng generate component xyz`

#### Create Service
 `ng generate service services/TodoService` 

#### Create interface
Create Interface_name.ts like:
```typescript
export interface Todo {
  id?: number; //? optional becouse when work on new object may not have id
  name: string;
  description: string;
}
```

#### Create json server "Dummy api data"
`npm install -g json-server` -g install global
`npm install -g json-server`  install in your project
add db.json in your root folder in the project

add run config to to your package.json in scripts
`"server": "json-server --watch db.json"` default port is 3000 you can change it with `--port 5000` 


#### setup http client
in app.module.ts import 
`import {HttpClientModule} from '@angular/common/http'` and in impprts add `HttpClientModule`

#### Use http client
import in your service class `import {HttpClient, HttpHeaders} from '@angular/common/http'`
in constractor
```typescript
 constructor(private api: HttpClient) {
  }
```
and use it like 
```typescript
  getAllTodos(): Observable<Todo[]> {
    return this.api.get<Todo[]>(this.url);
  }
```

#### Use service in your componant

in constractor
```typescript
export class TodoTableComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private service: TodoService) {
  }

  ngOnInit(): void {
    this.service.getAllTodos().subscribe(value => this.todos = value)
  }


}

```

in componant html file
```typescript
<tr *ngFor="let todo of todos">
    <td>{{todo.id}}</td>
    <td>{{todo.name}}</td>
    <td>{{todo.description}}</td>
  </tr>
```


#### Emmit event

##### * Child to parent

in child 
```typescript
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

```

```typescript
 @Output() saveEmmit = new EventEmitter;
 
  saveTodo() {
    //Use this.saveEmmit.emit(this.todo)
    this.service.addTodo(this.todo).subscribe(value => this.saveEmmit.emit(this.todo))
  }
  
```

in paernt

html : `<app-todo-form (saveEmmit)="onSave($event)"></app-todo-form>`

ts: 
```typescript
 onSave(todo:Todo) {
   //Do somthing
 }
```

##### * Parent Child to

in parent ts file

```typescript 
@ViewChild(TodoTableComponent) private table!: TodoTableComponent;
```

```typescript
 onSave(todo:Todo) {
    this.table.onTodoSaved(todo);
  }
```

in child:
```typescript
onTodoSaved(todo: Todo) {
    this.todos.push(todo);
  }
```

