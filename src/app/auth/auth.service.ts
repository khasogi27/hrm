import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, Users } from '@share/interfaces/user';
import { ApiService } from '@share/services/api.service';
import { LocalService } from '@share/services/local.service';
import { StateService } from '@share/services/state.service';
import { filter, map } from 'rxjs';

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
    private stateService: StateService,
  ) { }

  login(args: { email: string, password: string }) {
    const dataUser = JSON.stringify(args);
    const accsUser = JSON.stringify(this.user);
    if (dataUser !== accsUser) {
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
