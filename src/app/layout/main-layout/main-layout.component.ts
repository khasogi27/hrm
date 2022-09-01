import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sideNav')
  public sidenavIns: SidenavComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onCliked() {
    this.sidenavIns.onSideToggle();
  }
}
