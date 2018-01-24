import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {APIResponse, Product} from '../models/dtos';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Williams-Sonoma Products';

  products: Product[] = [];
  apiResponse: APIResponse;
  errorMessage: string;

  constructor(private router: Router,
              private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.apiResponse = data;
        this.products = this.apiResponse.groups;
      }, error => {
        this.errorMessage = error;
      });
  }

  viewDetails(product: Product): void {
    // set it to service
    this.productService.setCurrentProduct(product);
    this.router.navigate(['/details']);
  }

}
