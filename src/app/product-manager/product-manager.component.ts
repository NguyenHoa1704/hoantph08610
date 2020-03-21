import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

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
    // this.products = this.productService.removeProduct(id);
    this.products = this.products.filter(product => product.id != id)
  }
   showDetail(product){
    this.selected = product;
   }
}