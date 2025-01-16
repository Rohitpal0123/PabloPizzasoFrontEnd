import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [Menu, BadgeModule, RippleModule, AvatarModule, ButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Profile',

        items: [
          {
            separator: true,
          },
          {
            label: 'Settings',
            icon: 'fa-solid fa-gear',
          },

          {
            label: 'Messages',
            icon: 'fa-solid fa-bell',
          },
          {
            label: 'Logout',
            icon: 'fa-solid fa-right-from-bracket',
            command: () => this.logout(),
          },
        ],
      },
    ];
  }

  logout() {
    console.log("Logged out");
    this.router.navigate(['/login']);
  }
}
