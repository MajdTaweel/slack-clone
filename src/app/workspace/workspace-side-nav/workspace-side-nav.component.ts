import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-side-nav',
  templateUrl: './workspace-side-nav.component.html',
  styleUrls: ['./workspace-side-nav.component.scss'],
})
export class WorkspaceSideNavComponent implements OnInit {
  data = [
    {
      text: 'Channels',
      type: 'channels_parent',
      items: [
        {
          text: 'why',
          type: 'channel',
        },
        {
          text: 'who',
          type: 'channel',
        },
      ],
    },
    {
      text: 'Direct Messages',
      type: 'dm_parent',
      items: [
        {
          text: 'why',
          type: 'dm',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
