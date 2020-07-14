import { Component, OnInit, Input } from '@angular/core';
import { ITodoElement } from './../../shared/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() elements: ITodoElement[];

  constructor() { }

  ngOnInit() {
  }

}
