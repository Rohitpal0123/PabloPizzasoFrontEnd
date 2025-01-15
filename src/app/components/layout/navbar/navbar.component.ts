import { Component } from '@angular/core';
import { DrawerComponent } from "../../shared/drawer/drawer.component";

@Component({
  selector: 'app-navbar',
  imports: [ DrawerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
