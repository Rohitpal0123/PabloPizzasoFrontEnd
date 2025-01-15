import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'PabloPizzasoFrontEnd';
  shouldRun = true;

  toggleDarkMode() {
    const element: any = document.querySelector('html');
    element.classList.toggle('my-app-dark');
}
}
