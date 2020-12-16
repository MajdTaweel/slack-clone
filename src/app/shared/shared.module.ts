import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitterBaseComponent} from './splitter-base/splitter-base.component';
import {SplitterPaneBaseComponent} from './splitter-pane-base/splitter-pane-base.component';
import {SplitterModule} from '@progress/kendo-angular-layout';
import {AppBarBaseComponent} from './app-bar-base/app-bar-base.component';
import {AppBarModule} from '@progress/kendo-angular-navigation';
import {AppBarSectionBaseComponent} from './app-bar-base/app-bar-section-base/app-bar-section-base.component';
import {AppBarSpacerBaseComponent} from './app-bar-base/app-bar-spacer-base/app-bar-spacer-base.component';


@NgModule({
  declarations: [
    SplitterBaseComponent,
    SplitterPaneBaseComponent,
    AppBarBaseComponent,
    AppBarSectionBaseComponent,
    AppBarSpacerBaseComponent,
  ],
  exports: [
    SplitterBaseComponent,
    SplitterPaneBaseComponent,
    AppBarBaseComponent,
    AppBarSectionBaseComponent,
    AppBarSpacerBaseComponent,
  ],
  imports: [
    CommonModule,
    SplitterModule,
    AppBarModule,
  ]
})
export class SharedModule {
}
