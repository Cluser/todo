import { ITodoElement } from './../../shared/models/itodo-element';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditTodoElementModalComponent } from './../../shared/modals/edit-todo-element-modal/edit-todo-element-modal.component';
import { RemoveTodoElementModalComponent } from '../../shared/modals/remove-todo-element-modal/remove-todo-element-modal.component';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {

  @Input() element: ITodoElement;
  @Output() elementRemove = new EventEmitter<ITodoElement>();
  @Output() elementEdited = new EventEmitter<void>();

  public faEdit = faEdit;
  public faMinusSquare = faMinusSquare;
  private editTodoElementModal: BsModalRef;
  private removeTodoElementModal: BsModalRef;
  

  constructor(private bsModalService: BsModalService) { }

  ngOnInit() {
  }

  openEditTodoElementModal(): void {
    this.editTodoElementModal = this.bsModalService.show(EditTodoElementModalComponent, { ignoreBackdropClick: true });
    this.editTodoElementModal.content.todoElement = {...this.element};
    this.editTodoElementModal.content.onTodoAdd.subscribe((todoElement) => {
      this.element.id = todoElement.id;
      this.element.title = todoElement.title;
      this.element.description = todoElement.description;
      this.element.date = todoElement.date;
      this.elementEdited.emit();
    });
  }

  openRemoveTodoElementModal(): void {
    this.removeTodoElementModal = this.bsModalService.show(RemoveTodoElementModalComponent, { ignoreBackdropClick: true });
    this.removeTodoElementModal.content.onTodoRemove.subscribe(() => { this.elementRemove.emit(this.element); });
  }

}

