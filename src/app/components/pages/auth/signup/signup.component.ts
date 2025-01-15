import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { SignupFormComponent } from '../../../shared/signup-form/signup-form.component';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { Signup } from '../../../../models/Signup';

@Component({
  selector: 'app-signup',
  imports: [ButtonModule, TabsModule, SignupFormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSignupSubmit(credentials: Signup) {
    const signupData: Signup = credentials;

    this.authService.signup(signupData).subscribe({
      next: (Response) => {
        console.log('OTP sent', Response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log('Signup failed', error);
      },
    });
  }
}
