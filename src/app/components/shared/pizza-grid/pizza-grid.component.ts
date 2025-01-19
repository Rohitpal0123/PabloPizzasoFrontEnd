import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pizza-grid',
  imports: [CardModule, NgFor, NgIf],
  templateUrl: './pizza-grid.component.html',
  styleUrl: './pizza-grid.component.css',
})
export class PizzaGridComponent {
  @Input() products!: any[];

  // Add the pizza image paths
  pizzaImages: string[] = [
    '/pizzas/pexels-bopro-6214175.jpg',
    '/pizzas/pexels-enginakyurt-2619967.jpg',
    '/pizzas/pexels-enginakyurt-5379638.jpg',
    '/pizzas/pexels-enginakyurt-7813574.jpg',
    '/pizzas/pexels-guto-macedo-72150916-8444547.jpg',
    '/pizzas/pexels-horizon-content-2100060-3731423.jpg',
    '/pizzas/pexels-ikeen-james-1194926-2274787.jpg',
    '/pizzas/pexels-johnny-rizk-1550304-8176833.jpg',
    '/pizzas/pexels-marcos-vinicios-ramos-da-silva-449377108-15491639.jpg',
    '/pizzas/pexels-mustata-silva-102497380-12096782.jpg',
    '/pizzas/pexels-natan-machado-fotografia-gastronomica-162809799-11176611.jpg',
    '/pizzas/pexels-shameel-mukkath-3421394-5640023.jpg',
    '/pizzas/pexels-shameel-mukkath-3421394-5640034.jpg',
    '/pizzas/pexels-shameel-mukkath-3421394-5640037.jpg',
    '/pizzas/pexels-valeriya-16677742.jpg',
    '/pizzas/pexels-valeriya-9957551.jpg',
  ];

  beveragesImages: string[] = [
    '/beverages/pexels-fotios-photos-1476332.jpg',
    '/beverages/pexels-horizon-content-2100060-3727250.jpg',
    '/beverages/pexels-markusspiske-128242.jpg',
    '/beverages/pexels-prasannabaarathi-2367489-4045205.jpg',
    '/beverages/pexels-rahulp9800-2559025.jpg',
    '/beverages/pexels-tarek-shahin-153182669-18680337.jpg',
  ];

  breadsImages: string[] = [
    '/breads/pexels-enginakyurt-7813731.jpg',
    '/breads/pexels-fotios-photos-1753052.jpg',
    '/breads/pexels-freestocks-203089.jpg',
    '/breads/pexels-shameel-mukkath-3421394-5639423.jpg',
    '/breads/pexels-shameel-mukkath-3421394-5639443.jpg',
    '/breads/pexels-shliftik-7333169.jpg',
  ];

  desertsImages: string[] = [
    '/deserts/pexels-abhinavcoca-291528.jpg',
    '/deserts/pexels-alisha-mishra-579430-1343504.jpg',
    '/deserts/pexels-ash-craig-122861-376464.jpg',
    '/deserts/pexels-heyronmar-806363.jpg',
    '/deserts/pexels-melda-besir-1462737295-26898131.jpg',
    '/deserts/pexels-nishess-shakya-401526881-15014918.jpg',
    '/deserts/pexels-premsinghtanwar-25189329.jpg',
    '/deserts/pexels-troopper84-26838689.jpg',
  ];

  sidesImages: string[] = [
    '/sides/pexels-filirovska-8250190.jpg',
    '/sides/pexels-locrifa-33841318-7059460.jpg',
    '/sides/pexels-rachel-claire-5864585.jpg',
    '/sides/pexels-roman-odintsov-5836769.jpg',
    '/sides/pexels-sergio-arreola-208344354-24182616.jpg',
    '/sides/pexels-sergio-arreola-208344354-24182618.jpg',
    '/sides/pexels-zabdi-onan-caceres-52731503-7734563.jpg',
  ]
}
