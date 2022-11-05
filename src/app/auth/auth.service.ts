import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@share/interfaces/user';
import { LocalService } from '@share/services/local.service';
import { StateService } from '@share/services/state.service';

export const SESSION_KEY: string = "userSessions";

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
    const dataUser = JSON.stringify(args);
    if (dataUser !== JSON.stringify(this.user)) {
      this.stateService.openSnackBar('error');
      return;
    }
    this.localService.saveSessions(SESSION_KEY, dataUser);
    this.router.navigateByUrl("employee");
    this.stateService.openSnackBar('success');
  }

  logout() {
    this.localService.removeSession(SESSION_KEY);
    this.router.navigate(["login"]);
  }

  getToken() {
    return this.localService.getSession(SESSION_KEY);
  }

  getUser() {
    const user = this.getToken();
    if (user) {
      return JSON.parse(user);
    };
  }
}
