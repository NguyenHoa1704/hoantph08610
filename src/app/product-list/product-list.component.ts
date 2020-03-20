import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }
   selected: Product;
  products: Product[];
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.products = this.productService.getProducts();
  }
  removeItem(id){
    this.products = this.productService.removeProduct(id);
  }
   showDetail(product){
    this.selected = product;
   }
}