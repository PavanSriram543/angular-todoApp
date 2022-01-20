import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos?: Todo[];
  constructor() {}
  inputTodo: string = '';
  ngOnInit(): void {
    this.todos = [
      {
        content: 'first content',
        compleate: false,
      },
      {
        content: 'second content',
        compleate: false,
      },
    ];
  }
  togleDone(id: any) {
    this.todos?.map((v, i) => {
      if (i == id) v.compleate = !v.compleate;
      return v;
    });
  }
  deleteTodo(id: any) {
    this.todos = this.todos?.filter((v, i) => i !== id);
  }
  addTodo() {
    this.todos?.push({
      content: this.inputTodo,
      compleate: false,
    });
    this.inputTodo = '';
  }
}
