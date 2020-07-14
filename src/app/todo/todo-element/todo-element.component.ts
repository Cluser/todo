import { Component, OnInit, Input } from '@angular/core';
import { ITodoElement } from './../../shared/models';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {

  @Input() element: ITodoElement;

  constructor() { }

  ngOnInit() {
  }

}
