import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Skeleton } from 'primeng/skeleton';


@Component({
  selector: 'app-pizza-grid',
  imports: [CardModule, Skeleton],
  templateUrl: './pizza-grid.component.html',
  styleUrl: './pizza-grid.component.css'
})
export class PizzaGridComponent {

}
