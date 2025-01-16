import { Routes } from '@angular/router';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { SupportComponent } from './components/pages/support/support.component';
import { FavouritesComponent } from './components/pages/favourites/favourites.component';
import { CartComponent } from './components/pages/cart/cart.component';

export const routes: Routes = [	
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},	
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'orders', component: OrdersComponent},
  {path: 'cart', component: CartComponent},
  {path: 'favorites', component: FavouritesComponent},
  {path: 'support', component: SupportComponent},
];
