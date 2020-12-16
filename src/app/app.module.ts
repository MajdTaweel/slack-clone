import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@progress/kendo-angular-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolBarModule} from '@progress/kendo-angular-toolbar';
import {TreeViewModule} from '@progress/kendo-angular-treeview';
import {IconsModule} from '@progress/kendo-angular-icons';
import {NavigationModule} from '@progress/kendo-angular-navigation';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    ToolBarModule,
    TreeViewModule,
    IconsModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
