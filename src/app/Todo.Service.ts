import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class TodoService {

  constructor(private http:Http) { }
  getTodos(){
    return this.http.get("http://localhost:8080/todolist")
        .map(res => res.json());
  }
   addTodo(todo){
     console.log(JSON.stringify(todo));
    return this.http.post("http://localhost:8080/todolist",todo)
        .map(res => res.json());
  }
  getTodo(id){
    return this.http.get("http://localhost:8080/todolist/"+id)
        .map(res => res.json());
  }
  deleteTodo(id){
    return this.http.delete("http://localhost:8080/todolist/"+id)
        //.map(res => res.json());
  }
  updateTodo(id, todo){
    return this.http.put("http://localhost:8080/todolist/"+id,todo)
        .map(res => res.json());
  }
}