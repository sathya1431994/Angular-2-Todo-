import { Component, OnInit } from '@angular/core';
import { TodoService } from './Todo.Service';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  title = 'Todo';
  todos: Todo;
  todo : Todo[];
  model = new Todo();

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos()
      .subscribe(todo => {
        this.todo = todo;
      });
  }

  addTodo() {
   
      //alert("add called"+this.model.id);
      this.todoService.addTodo(this.model)
        .subscribe(todos => {
          this.model = todos;
          this.getTodos();
          this.clearModel();
        });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(id)
      .subscribe(() => {
        this.getTodos();
      });
  }

  editTodo(id) {
    console.log('updateTodo ' + id);
    this.todoService.getTodo(id)
      .subscribe(todo => {
        this.model = todo;
      })
  }

  getTodo(id) {
    this.todoService.getTodo(id)
      .subscribe(todo => {
        this.model = todo;
      })
  }

  clearModel() {
    this.model.id=0;
    this.model.isCompleted=false;
    this.model.name = "";
    this.model.status = "";
    this.model.priority = "";
  }
  public isCompleted = [
    { value: 'false', display: 'False' },
    { value: 'true', display: 'True' }

  ];

  cancel(){
    this.clearModel();
  }
}