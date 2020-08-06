import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodoList } from './../../shared/models';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { ITodoElement } from './../../shared/models/itodo-element';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddTodoElementModalComponent } from './../../shared/modals/add-todo-element-modal/add-todo-element-modal.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragAndDropService } from './../../shared/functions/drag-and-drop.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: ITodoList;
  @Output() listUpdated = new EventEmitter<void>();

  public faPlusSquare = faPlusSquare;
  private addTodoElementModal: BsModalRef;

  constructor(private bsModalService: BsModalService, private dragAndDropService: DragAndDropService) {
  }

  ngOnInit(): void {
  }

  openAddTodoElementModal(): void {
    this.addTodoElementModal = this.bsModalService.show(AddTodoElementModalComponent, { ignoreBackdropClick: true });
    this.addTodoElementModal.content.onTodoAdd.subscribe((todoElement) => {
      this.list.elements.push(todoElement);
      this.listUpdated.emit();
    });
  }

  handleElementRemove(todoElement: ITodoElement): void {
    this.list.elements = this.list.elements.filter((element) => element !== todoElement);
    this.listUpdated.emit();
  }

  handleElementEdited(): void {
    this.listUpdated.emit();
  }

  drop(event: CdkDragDrop<string[]>) {
    this.dragAndDropService.drop(event);
    this.listUpdated.emit();
  }
}
