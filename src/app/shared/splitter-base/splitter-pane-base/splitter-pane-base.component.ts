import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-splitter-pane-base',
  templateUrl: './splitter-pane-base.component.html',
  styleUrls: ['./splitter-pane-base.component.scss'],
})
export class SplitterPaneBaseComponent implements OnInit {
  @Input() size = '';
  @Input() min = '';
  @ViewChild(TemplateRef, { static: true }) templateRef!: TemplateRef<any>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  get className(): string {
    return this.elementRef.nativeElement.className;
  }
}
