import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AddTodoElementModalComponent } from './modals/add-todo-element-modal/add-todo-element-modal.component';

@NgModule({
  declarations: [
    AddTodoElementModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgxSmartModalModule
  ],
  exports: [
    FormsModule,
    FontAwesomeModule,
    NgxSmartModalModule,
    AddTodoElementModalComponent
  ]
})

export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
