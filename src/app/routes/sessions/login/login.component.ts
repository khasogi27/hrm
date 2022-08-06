import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { LocalService } from '@share/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user1: string = "ogi";

  constructor(
    private authService: AuthService,
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.localService.saveData("Sessions", this.user1);
  }

  onLogin() {
    this.authService.login();
  }

}
