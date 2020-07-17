import { Component, OnInit, Input } from '@angular/core';
import { ITodoList } from './../../shared/models';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { ITodoElement } from './../../shared/models/itodo-element';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddTodoElementModalComponent } from './../../shared/modals/add-todo-element-modal/add-todo-element-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: ITodoList;

  private faPlusSquare = faPlusSquare;
  private addTodoElementModal: BsModalRef;

  constructor(private bsModalService: BsModalService ) {
  }

  ngOnInit(): void {
  }

  openAddTodoElementModal(): void {
    this.addTodoElementModal = this.bsModalService.show(AddTodoElementModalComponent, { ignoreBackdropClick: true });
    this.addTodoElementModal.content.onTodoAdd.subscribe((todoElement) => { this.list.elements.push(todoElement); });
  }

  handleElementRemove(todoElement: ITodoElement): void {
    this.list.elements = this.list.elements.filter((element) => element !== todoElement);
  }
}
