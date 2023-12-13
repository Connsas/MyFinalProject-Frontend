import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/carItem';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{
  cartItems:CartItem[]=[];

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
  }
}
