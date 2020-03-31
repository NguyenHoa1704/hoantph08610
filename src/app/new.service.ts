import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './Product';

import { Observable } from 'rxjs';

@Injectable()
export class NewService {

  api = 'https://jsonplaceholder.typicode.com/posts';
  

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }

}