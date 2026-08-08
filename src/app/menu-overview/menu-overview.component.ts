import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-menu-overview',
    templateUrl: './menu-overview.component.html',
    styleUrls: ['./menu-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MenuOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
