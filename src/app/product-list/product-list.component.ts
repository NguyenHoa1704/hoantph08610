import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//  name: string = 'Item 1';
product : product = {
  name: 'nguyễn thị hoa',
  price: 100000000,
  desc: 'xinh dep',
  img: 'https://dummyimage.com/275x175/000/fff',
  status: false
}
changeStatus(){
  this.product.status= !this.product.status;
}
changeName(e){
  this.product.name= e.target.value;
}
}
