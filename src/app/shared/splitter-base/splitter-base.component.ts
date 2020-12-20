import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { Orientation } from '@progress/kendo-angular-layout';
import { SplitterPaneBaseComponent } from './splitter-pane-base/splitter-pane-base.component';

export interface Pane {
  size?: string;
  min?: string;
  class?: string;
}

@Component({
  selector: 'app-splitter-base',
  templateUrl: './splitter-base.component.html',
  styleUrls: ['./splitter-base.component.scss'],
})
export class SplitterBaseComponent implements OnInit {
  @Input() orientation: Orientation = 'vertical';
  @Input() panes: Pane[] = [];
  @ContentChildren(SplitterPaneBaseComponent)
  splitterPanes!: QueryList<SplitterPaneBaseComponent>;

  constructor() {}

  ngOnInit(): void {}
}
