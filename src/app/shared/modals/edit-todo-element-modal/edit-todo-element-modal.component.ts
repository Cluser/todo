import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ITodoElement } from '../../models/itodo-element';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-todo-element-modal',
  templateUrl: './edit-todo-element-modal.component.html',
  styleUrls: ['./edit-todo-element-modal.component.scss']
})
export class EditTodoElementModalComponent implements OnInit {

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

  editTodoElement(): void {
    this.onTodoAdd.next(this.todoElement);
    this.toastrService.success('ToDo has been succesfully edited', 'ToDo edited');
    this.closeModal();
  }
}
