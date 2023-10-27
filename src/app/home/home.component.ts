import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  // products: any[] = []; 
  // filteredProducts: any[] = [];

  // constructor(private productService: ServiceService) {} 

  // ngOnInit() {
  //   // Fetch products using ProductService
  //   this.productService.getProducts().subscribe((data: any) => {
  //     this.products = data;
  //     this.filteredProducts = data; 
  //   });
  // }

  // filterProducts(category: string) {
  //   if (category === 'all') {
  //     this.filteredProducts = this.products; // Show all products
  //   } else {
  //     this.filteredProducts = this.products.filter(product => product.category === category);
  //   }
  // }
}


