import { Component, OnInit } from '@angular/core';
import { ITodo } from '../shared/models';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoData: ITodo;

  constructor(private dbService: NgxIndexedDBService) { }

  ngOnInit() {
    this.initTodo();
    this.initStore();
  }

  initTodo() {
    this.todoData = {
      new: {
        name: 'New',
        elements: []
      },
      inProgress: {
        name: 'In progress',
        elements: []
      },
      done: {
        name: 'Done',
        elements: []
      }
    };
  }

  initStore() {
    this.dbService.count('todo').then(
      (todoCount) => {
          if (todoCount === 0) {
            this.createStore();
          } else {
            this.getStore();
          }
      },
      error => {
          console.log(error);
      }
    );
  }

  createStore() {
    this.dbService.add('todo', this.todoData).then(
      () => {
          this.getStore();
      },
      error => {
          console.log(error);
      }
  );
  }

  updateStore() {
    this.dbService.update('todo', this.todoData);
  }

  getStore() {
    this.dbService.getByKey('todo', 1).then(
      todo => {
          this.todoData = todo;
      },
      error => {
          console.log(error);
      }
  );
  }

  handleListUpdated() {
    this.updateStore();
  }

}
