import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-remove-todo-element-modal',
  templateUrl: './remove-todo-element-modal.component.html',
  styleUrls: ['./remove-todo-element-modal.component.scss']
})
export class RemoveTodoElementModalComponent implements OnInit {

  public onTodoRemove: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef, private toastrService: ToastrService) { }

  ngOnInit() {
    this.onTodoRemove = new Subject();
  }

  closeModal(): void {
    this.bsModalRef.hide();
  }

  removeTodoElement(): void {
    this.onTodoRemove.next(true);
    this.toastrService.success('ToDo has been succesfully removed', 'ToDo removed')
    this.closeModal();
  }

}
