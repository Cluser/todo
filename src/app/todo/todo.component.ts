import { Component, OnInit } from '@angular/core';
import { ITodo } from '../shared/models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoData: ITodo;

  constructor() { }

  ngOnInit() {
    this.todoData = {
      new: [
        { id: 0, title: 'Title', description: 'description', date: new Date()},
        { id: 0, title: 'Title', description: 'description', date: new Date()},
        { id: 0, title: 'Title', description: 'description', date: new Date()}
      ],
      inProgress: [
        { id: 0, title: 'Title', description: 'description', date: new Date()},
        { id: 0, title: 'Title', description: 'description', date: new Date()}
      ],
      done: [
        { id: 0, title: 'Title', description: 'description', date: new Date()}
      ]
    };
  }

}
