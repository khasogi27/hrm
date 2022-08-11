import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

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
    this.toggleSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
