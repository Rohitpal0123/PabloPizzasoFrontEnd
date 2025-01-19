import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-filter',
  imports: [Divider, NgClass],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() onVegFilter: EventEmitter<boolean> = new EventEmitter<boolean>();
  isVeg: boolean = false;

  onVegToggle() {
    this.isVeg = !this.isVeg;
    this.onVegFilter.emit(this.isVeg);
  }
}
