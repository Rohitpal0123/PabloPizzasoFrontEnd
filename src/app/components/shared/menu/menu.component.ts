import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  imports: [Menu, ButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [
                  {
                      label: 'Refresh',
                      icon: 'pi pi-refresh'
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-upload'
                  }
              ]
          }
      ];
  }
}
