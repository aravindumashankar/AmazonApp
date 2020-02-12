import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {  
    path : '',
    redirectTo: '/carousel',
    pathMatch: 'full'
  },

  {  
    path : 'carousel',
    component: CarouselComponent
  },

  {  
    path : 'login',
    component: LoginComponent
  },

 {
   path: 'laptoplist',
   component : LaptopListComponent
 },
 {
   path : 'cart',
   component : CartComponent
 },
 {
   path: 'productcard',
   component: ProductCardComponent
 },
 {
   path : 'productdetails/:id',
   component : ProductDetailsComponent
 }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
