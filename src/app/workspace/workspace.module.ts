import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { SharedModule } from '../shared/shared.module';
import { WorkspaceSideNavComponent } from './workspace-side-nav/workspace-side-nav.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { AvatarModule } from '@progress/kendo-angular-layout';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

@NgModule({
  declarations: [WorkspaceComponent, WorkspaceSideNavComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
    TreeViewModule,
    ButtonModule,
    TextBoxModule,
    AvatarModule,
    TooltipModule,
  ],
})
export class WorkspaceModule {}
