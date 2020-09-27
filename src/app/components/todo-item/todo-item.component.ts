import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // is this even needed? not sure it does anything

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    //toogles the UI
    todo.completed = !todo.completed;

    //toggle server
    this.todoService.toggleCompleted(todo).subscribe( todo => console.log('test'));

  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
