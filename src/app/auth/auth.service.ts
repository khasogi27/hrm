import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@share/interfaces/user';
import { LocalService } from '@share/services/local.service';
import { StateService } from '@share/services/state.service';

export let sessions: string = "userSessions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User = {
    email: 'admin@gmail.com',
    password: 'rahasia'
  }

  constructor(
    private router: Router,
    private localService: LocalService,
    private stateService: StateService
  ) { }

  login(args: User) {
    if (JSON.stringify(args) !== JSON.stringify(this.user)) {
      this.stateService.openSnackBar('error');
      return;
    }
    this.localService.saveSessions(sessions, JSON.stringify(args));
    this.router.navigateByUrl("employee");
    this.stateService.openSnackBar('success');
  }

  logout() {
    this.localService.removeSession(sessions);
    this.router.navigate(["login"]);
  }

  getToken() {
    return this.localService.getSession(sessions);
  }

  getUser() {
    return JSON.parse(this.getToken());
  }
}
