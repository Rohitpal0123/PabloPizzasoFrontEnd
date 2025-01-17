import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Login } from '../../../../models/Login';
import { LoginFormComponent } from '../../../shared/login-form/login-form.component';
import { Router } from '@angular/router';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, ButtonModule, ToastModule, RippleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLoginSubmit(credentials: Login) {
    const loginData: Login = credentials;

    this.authService.login(loginData).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log('Login failed', error);
      },
    });
  }
}
