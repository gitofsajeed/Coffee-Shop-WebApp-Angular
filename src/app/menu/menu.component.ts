import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private service : ServiceService){}

  filteredProducts = this.service.Products;

  filterProducts(category: string) {
    if (category === 'all') {
      this.filteredProducts = this.service.Products;
    } else {
      this.filteredProducts = this.service.Products.filter(product => product.category=== category);
    }
  }
}
