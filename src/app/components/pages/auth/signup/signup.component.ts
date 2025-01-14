import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {TabsModule} from 'primeng/tabs';
import { SignupFormComponent } from '../../../shared/signup-form/signup-form.component';

@Component({
  selector: 'app-signup',
  imports: [ButtonModule, TabsModule, SignupFormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
