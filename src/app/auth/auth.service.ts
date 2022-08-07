import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '@share/services/local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sessions: string = "userSessions";
  private user: { email: string, password: string } = {
    email: 'khasogi27@live.com',
    password: 'rahasia'
  }

  constructor(
    private router: Router,
    private localService: LocalService
  ) { }

  login(args: { email: string, password: string }) {
    if (JSON.stringify(args) !==JSON.stringify(this.user)) {
      return;
    }
    this.localService.saveData(this.sessions, args);
    this.router.navigate(["employee"]);
  }

  logout() {
    this.localService.removeData(this.sessions);
    this.router.navigate(["login"]);
  }

  getToken() {
    return this.localService.getData(this.sessions);
  }
}
