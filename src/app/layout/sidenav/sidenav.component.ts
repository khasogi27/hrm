import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild("sideNav") sidecomp: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  onSideToggle() {
    this.sidecomp.toggle();
  }

}
