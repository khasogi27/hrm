import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: { email: string, password: string };
  public form: FormGroup;
  public hidePass: boolean = true;

  constructor(
    private authService: AuthService,
    private builder: FormBuilder
  ) { 
    this.form = this.builder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.user = this.form.value;
    this.authService.login(this.user);
  }

}
