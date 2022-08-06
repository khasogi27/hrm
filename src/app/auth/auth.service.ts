import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '@share/services/local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private localService: LocalService
  ) { }

  login() {
    this.router.navigate(["employee"]);
  }

  getToken() {
    return this.localService.getData("Sessions")
  }
}
