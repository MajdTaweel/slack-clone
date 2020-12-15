import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarBaseComponent} from './toolbar-base/toolbar-base.component';
import {ToolBarModule} from '@progress/kendo-angular-toolbar';
import { SplitterBaseComponent } from './splitter-base/splitter-base.component';
import { SplitterPaneBaseComponent } from './splitter-pane-base/splitter-pane-base.component';
import {SplitterModule} from '@progress/kendo-angular-layout';


@NgModule({
  declarations: [
    ToolbarBaseComponent,
    SplitterBaseComponent,
    SplitterPaneBaseComponent,
  ],
  exports: [
    ToolbarBaseComponent,
    SplitterBaseComponent,
    SplitterPaneBaseComponent,
  ],
  imports: [
    CommonModule,
    ToolBarModule,
    SplitterModule,
  ]
})
export class SharedModule {
}
