import { ITodoElement } from './../../shared/models/itodo-element';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RemoveTodoElementModalComponent } from 'src/app/shared/modals/remove-todo-element-modal/remove-todo-element-modal.component';


@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {

  @Input() element: ITodoElement;
  @Output() elementRemove = new EventEmitter<ITodoElement>();

  private faEdit = faEdit;
  private faMinusSquare = faMinusSquare;
  private removeTodoElementModal: BsModalRef;

  constructor(private bsModalService: BsModalService ) { }

  ngOnInit() {
  }

  openRemoveTodoElementModal(): void {
    this.removeTodoElementModal = this.bsModalService.show(RemoveTodoElementModalComponent, { ignoreBackdropClick: true });
    this.removeTodoElementModal.content.onTodoRemove.subscribe(() => { this.elementRemove.emit(this.element); });
  }

}

