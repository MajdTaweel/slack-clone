import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar-spacer-base',
  templateUrl: './app-bar-spacer-base.component.html',
  styleUrls: ['./app-bar-spacer-base.component.scss'],
})
export class AppBarSpacerBaseComponent implements OnInit {
  @Input() width = '';

  constructor() {}

  ngOnInit(): void {}
}
