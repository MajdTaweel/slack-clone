import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarBaseComponent} from './toolbar-base/toolbar-base.component';
import {ToolBarModule} from '@progress/kendo-angular-toolbar';


@NgModule({
  declarations: [
    ToolbarBaseComponent,
  ],
  exports: [
    ToolbarBaseComponent,
  ],
  imports: [
    CommonModule,
    ToolBarModule,
  ]
})
export class SharedModule {
}
