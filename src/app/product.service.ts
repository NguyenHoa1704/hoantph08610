import { Injectable } from '@angular/core';
import { data } from './MockData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = data;
  constructor() { }

  getProducts(){
    return this.products;
  }
  getProduct(id) {
    return this.products.find(product => product.id != id);
  }
  removeProduct(id){
    return this.products.filter(product => product.id != id);
  }
  addProduct(product){
    const newProduct = { id: 5, ...product, img: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/s960x960/51854065_2184089838521507_6488174379854200832_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_ohc=HtLJiqj3y8MAX8MxJwd&_nc_ht=scontent-hkt1-1.xx&_nc_tp=7&oh=d905d4213f535f8ee9fab933f0536a18&oe=5E98B74A', status :true};
    this.products.push(newProduct);
    console.log(this.products)
  }
}