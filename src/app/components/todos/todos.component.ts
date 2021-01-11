import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  // to import services
  constructor(private todoService:TodoService) { }

  // live cicle metod. runs first.
  ngOnInit() { 
    this.todos = this.todoService.getTodos();
  }
}
