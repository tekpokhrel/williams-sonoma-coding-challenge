import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/dtos';

@Injectable()
export class ProductService {
  private currentProduct: Product;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json');
  }

  setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }

  getCurrentProduct(): Product {
    return this.currentProduct;
  }
}

