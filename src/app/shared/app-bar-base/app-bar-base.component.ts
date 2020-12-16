import {Component, Input, OnInit} from '@angular/core';
import {AppBarPosition} from '@progress/kendo-angular-navigation';

@Component({
  selector: 'app-appbar-base',
  templateUrl: './app-bar-base.component.html',
  styleUrls: ['./app-bar-base.component.scss']
})
export class AppBarBaseComponent implements OnInit {
  @Input() position: AppBarPosition = 'top';

  constructor() {
  }

  ngOnInit(): void {
  }
}
