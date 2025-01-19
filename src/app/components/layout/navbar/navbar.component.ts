import { Component, Input } from '@angular/core';
import { DrawerComponent } from '../../shared/drawer/drawer.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CoinsComponent } from '../../shared/coins/coins.component';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-navbar',
  imports: [DrawerComponent, MenuComponent, CoinsComponent, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() visible: boolean = false;

  constructor(private productService: ProductsService) {}


  onClick() {
    console.log('trying toget product');
    this.productService.getAllProducts().subscribe({
      next : (response) => {
        console.log('All Products', response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
