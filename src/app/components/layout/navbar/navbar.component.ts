import { Component } from '@angular/core';
import { DrawerComponent } from "../../shared/drawer/drawer.component";
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-navbar',
  imports: [ DrawerComponent, MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
