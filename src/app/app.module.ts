import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewComponent } from './new/new.component';
import { NewService } from './new.service';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello.component';
import { ProductService } from './product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, CategoryComponent, ProductComponent, ProductAddComponent, ManagerComponent, HomeComponent, ManagerComponent, NewComponent, NotFoundComponent, ProductDetailComponent, ProductEditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService],
})
export class AppModule { }
