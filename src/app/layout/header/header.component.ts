import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() itemSide: any;

  public user: any;
  
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.authService.getUser();
  }

  onToggle() {
    // this.itemSide.onToggle();
  }

  onLogout() {
    this.authService.logout();
  }

}
