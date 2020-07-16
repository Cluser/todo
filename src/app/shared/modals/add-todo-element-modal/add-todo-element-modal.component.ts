import { ITodoElement } from './../../models/itodo-element';
import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-add-todo-element-modal',
  templateUrl: './add-todo-element-modal.component.html',
  styleUrls: ['./add-todo-element-modal.component.scss']
})
export class AddTodoElementModalComponent implements OnInit {

  private todoElement: ITodoElement;
  private addTodoElementModalName = 'addTodoElementModal';

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.clearData();
  }

  public clearData() {
    this.todoElement = {
      id: null,
      title: null,
      description: null,
      date: null
    };
  }

  public closeModal() {
    this.ngxSmartModalService.close(this.addTodoElementModalName);
    this.clearData();
  }

  public addTodo() {
    this.ngxSmartModalService.resetModalData(this.addTodoElementModalName);
    this.ngxSmartModalService.setModalData(this.todoElement, this.addTodoElementModalName);
    this.closeModal();
  }
}
