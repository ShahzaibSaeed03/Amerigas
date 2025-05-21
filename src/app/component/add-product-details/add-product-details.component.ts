import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './add-product-details.component.html',
  styleUrl: './add-product-details.component.css'
})
export class AddProductDetailsComponent {
  activeTab: string = 'general'; // default tab
  showCart = false;

  addToCart() {
    this.showCart = true;
  }
  
  
}
