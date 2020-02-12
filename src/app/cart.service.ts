import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCartItem, Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


private shoppingcart = new BehaviorSubject<ShoppingCartItem[]>([]);

  constructor() { }


addtocart(product : Product, quantity : number )
{
  if ( quantity < 0 )
  {
    console.log("Quantity cannot be less tan 0");
    return;
  }

   let cart = this.shoppingcart.getValue();
   let itemIndex = -1;

   if(!isNaN(product.id)){
     itemIndex = cart.findIndex(cartItem =>cartItem.product.id== product.id);
   }
   else {
     itemIndex = cart.findIndex(cartItem =>cartItem.product.name == product.name);
   }

   

if(itemIndex > -1){
let cartItem = cart[itemIndex];
cartItem.quantity = cartItem.quantity + quantity;
}
else{
  let cartItem:ShoppingCartItem = {product:product,quantity: quantity}
  cart.push(cartItem);
}



//this.calcCost();



}

}





