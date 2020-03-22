import { Component, OnInit } from '@angular/core';
import {data} from '../MockData';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: Product[];
 selected: Product;
  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }
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
   showdetail(product){
    this.selected = product;
   }

}