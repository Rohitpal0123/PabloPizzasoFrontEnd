import { Component, EventEmitter, Output } from '@angular/core';
import { Login } from '../../../models/Login';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @Output() onLogin: EventEmitter<Login> = new EventEmitter<Login>();

  email: string = '';
  password: string = '';

  onSubmit(event: Event) {
      event.preventDefault();
      const credentials: Login = {
        email: this.email,
        password: this.password}

    this.onLogin.emit(credentials)
  }
}
