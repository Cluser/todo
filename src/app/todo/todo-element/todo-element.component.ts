import { Component, OnInit, Input } from '@angular/core';
import { ITodoElement } from './../../shared/models';
import { faEdit, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {

  @Input() element: ITodoElement;

  faEdit = faEdit;
  faMinusSquare = faMinusSquare;

  constructor() { }

  ngOnInit() {
  }

}
