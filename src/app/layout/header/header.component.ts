import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() itemSide: any;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onToggle() {
    this.itemSide.onToggle();
  }

  onLogout() {
    this.authService.logout();
  }

}
