import { Component } from '@angular/core';
import { CardSkeletonComponent } from '../../shared/card-skeleton/card-skeleton.component';
import { PizzaGridComponent } from '../../shared/pizza-grid/pizza-grid.component';


@Component({
  selector: 'app-home',
  imports: [ PizzaGridComponent, CardSkeletonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
