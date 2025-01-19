import { Component, OnInit } from '@angular/core';
import { CardSkeletonComponent } from '../../shared/card-skeleton/card-skeleton.component';
import { PizzaGridComponent } from '../../shared/pizza-grid/pizza-grid.component';
import { ProductsService } from '../../../services/products.service';
import { NgIf } from '@angular/common';
import { Divider } from 'primeng/divider';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'app-home',
  imports: [PizzaGridComponent, CardSkeletonComponent, NgIf, FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  isLoading: boolean = true;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = this.sortProductsByCategory(products);
      this.filteredProducts = this.products;
      this.isLoading = false;
    });
  }

  filterVeg(isVeg: boolean): void {
    if (isVeg) {
      this.filteredProducts = this.products.filter((product) => product.foodType === 'veg');
    } else {
      this.filteredProducts = this.products;
    }
  }

  private sortProductsByCategory(products: any[]): any[] {
    const categoryOrder = ['Pizza', 'Breads', 'Sides', 'Beverages', 'Deserts'];
    return products.sort((a, b) => {
      const categoryA = a.categoryName;
      const categoryB = b.categoryName;
      return (
        categoryOrder.indexOf(categoryA) - categoryOrder.indexOf(categoryB)
      );
    });
  }
}
