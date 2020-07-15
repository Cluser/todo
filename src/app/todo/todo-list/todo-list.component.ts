import { Component, OnInit, Input } from '@angular/core';
import { ITodoList } from './../../shared/models';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: ITodoList;

  faPlusSquare = faPlusSquare;

  constructor() { }

  ngOnInit() {
    console.log(this.list.elements);
  }

}
