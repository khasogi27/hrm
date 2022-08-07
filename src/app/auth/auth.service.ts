import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@share/interfaces/user';
import { LocalService } from '@share/services/local.service';

export let sessions: string = "userSessions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User = {
    email: 'admin@gmail.com',
    password: 'admin'
  }

  constructor(
    private router: Router,
    private localService: LocalService
  ) { }

  login(args: User) {
    if (JSON.stringify(args) !== JSON.stringify(this.user)) {
      return;
    }
    this.localService.saveData(sessions, JSON.stringify(args));
    this.router.navigate(["employee"]);
  }

  logout() {
    this.localService.removeData(sessions);
    this.router.navigate(["login"]);
  }

  getToken() {
    return this.localService.getData(sessions);
  }

  getUser() {
    return JSON.parse(this.getToken());
  }
}
