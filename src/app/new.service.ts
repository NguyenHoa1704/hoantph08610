import {Injectable } from '@angular/core';
import {data} from './Mockdata';
import {Product} from './Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class NewService{
  api = 'https://jsonplaceholder.typicode.com/posts';
  products= data;
  constructor(
    private http: HttpClient
  ){}
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
}