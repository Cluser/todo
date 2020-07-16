import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoComponent } from './todo.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoElementComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule
  ],
  entryComponents: [
  ]
})
export class TodoModule { }
