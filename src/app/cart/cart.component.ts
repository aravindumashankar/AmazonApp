import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart : ShoppingCartItem, private cartservice : CartService ){ }


  
  ngOnInit() {
  }

}
