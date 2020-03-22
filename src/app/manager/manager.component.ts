import { Component, OnInit } from '@angular/core';
import {data} from '../MockData';
import {Product} from '../Product';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

products : Product[];
selected : Product;
  constructor(
private productService: ProductService
) {
  console.log('constructor')
 }
  ngOnInit(): void {
    this.getProduct();
  }
getProduct(){
  this.products= this.productService.getProducts();
}
//removeItem(id){
// this.product= this.productService.removeProduct(id);
//}
showdetail(product){
  this.selected = product;
}
removeItem(id) {
    this.products = this.products.filter(product => product.id != id);
  }
}