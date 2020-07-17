import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ITodoElement } from '../../models/itodo-element';

@Component({
  selector: 'app-edit-todo-element-modal',
  templateUrl: './edit-todo-element-modal.component.html',
  styleUrls: ['./edit-todo-element-modal.component.scss']
})
export class EditTodoElementModalComponent implements OnInit {

  public onTodoAdd: Subject<ITodoElement>;
  public todoElement: ITodoElement;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onTodoAdd = new Subject();

    this.todoElement = {
      id: null,
      title: null,
      description: null,
      date: null
    };
  }

  closeModal(): void {
    this.bsModalRef.hide();
  }

  editTodoElement(): void {
    this.onTodoAdd.next(this.todoElement);
    this.closeModal();
  }
}
