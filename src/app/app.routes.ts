import { Routes } from '@angular/router';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},	
  {path: 'home', component: HomeComponent},	
];
