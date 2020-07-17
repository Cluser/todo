import { Component, OnInit, Input } from '@angular/core';
import { ITodoList } from './../../shared/models';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Subscription } from 'rxjs';
import { ITodoElement } from './../../shared/models/itodo-element';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: ITodoList;

  private faPlusSquare = faPlusSquare;
  private addTodoElementModalName = 'addTodoElementModal';
  private addTodoElementModalCloseSubscribtion: Subscription;

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit(): void {
  }

  openAddElementModal(): void {
    this.ngxSmartModalService.resetModalData(this.addTodoElementModalName);
    this.ngxSmartModalService.getModal(this.addTodoElementModalName).open();
    this.subscribeToModalClose();
  }

  subscribeToModalClose(): void {
    this.addTodoElementModalCloseSubscribtion = this.ngxSmartModalService.getModal(this.addTodoElementModalName).onClose.subscribe(() => {
      const todoElement = this.ngxSmartModalService.getModalData(this.addTodoElementModalName);
      if (todoElement) { this.list.elements.push(todoElement); }
      this.unsubscribeFromModalClose();
    });
  }

  unsubscribeFromModalClose(): void {
    this.addTodoElementModalCloseSubscribtion.unsubscribe();
  }

  handleElementRemove(todoElement: ITodoElement): void {
    this.list.elements = this.list.elements.filter((element) => element !== todoElement);
  }
}
