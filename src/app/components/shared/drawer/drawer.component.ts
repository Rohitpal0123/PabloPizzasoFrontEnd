import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {Divider, DividerModule} from 'primeng/divider';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-drawer',
  imports: [ButtonModule, DrawerModule, FontAwesomeModule, DividerModule, RouterLink],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
 
  visible: boolean = false;
}
