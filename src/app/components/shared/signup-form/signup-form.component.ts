import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Signup } from '../../../models/Signup';

@Component({
  selector: 'app-signup-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  @Output() onSignup: EventEmitter<Signup> = new EventEmitter<Signup>();

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  onSubmit(event: Event) {
    event.preventDefault();

    const credentials: Signup = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }

    this.onSignup.emit(credentials)
  }

  
}
