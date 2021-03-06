import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AddTodoElementModalComponent } from './modals/add-todo-element-modal/add-todo-element-modal.component';
import { RemoveTodoElementModalComponent } from './modals/remove-todo-element-modal/remove-todo-element-modal.component';
import { EditTodoElementModalComponent } from './modals/edit-todo-element-modal/edit-todo-element-modal.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';
import { TooltipModuleConfig } from './configs/tooltip-module-config';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './configs/index-db-config';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropService } from './functions/drag-and-drop.service';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from './configs/toastr-config';


@NgModule({
  declarations: [
    AddTodoElementModalComponent,
    RemoveTodoElementModalComponent,
    EditTodoElementModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgxSmartModalModule,
    NgScrollbarModule,
    TooltipModule.forRoot(TooltipModuleConfig as TooltipOptions),
    NgxIndexedDBModule.forRoot(dbConfig),
    ToastrModule.forRoot(toastrConfig),
    DragDropModule
  ],
  exports: [
    FormsModule,
    FontAwesomeModule,
    NgxSmartModalModule,
    NgScrollbarModule,
    TooltipModule,
    NgxIndexedDBModule,
    ToastrModule,
    DragDropModule,
    AddTodoElementModalComponent,
    RemoveTodoElementModalComponent,
    EditTodoElementModalComponent
  ],
  entryComponents: [
    AddTodoElementModalComponent,
    RemoveTodoElementModalComponent,
    EditTodoElementModalComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
        ngModule: SharedModule,
        providers: [DragAndDropService]
    };
}
}
