import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ITodoElement } from './../../models/itodo-element';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-todo-element-modal',
  templateUrl: './add-todo-element-modal.component.html',
  styleUrls: ['./add-todo-element-modal.component.scss']
})
export class AddTodoElementModalComponent implements OnInit {

  public onTodoAdd: Subject<ITodoElement>;
  public todoElement: ITodoElement;

  constructor(public bsModalRef: BsModalRef, private toastrService: ToastrService) { }

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

  addTodoElement(): void {
    this.todoElement.date = new Date();
    this.onTodoAdd.next(this.todoElement);
    this.toastrService.success('New ToDo has been succesfully added', 'New todo');
    this.closeModal();
  }
}
