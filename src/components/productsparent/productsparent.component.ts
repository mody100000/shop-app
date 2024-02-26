import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productsparent',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductComponent],

  templateUrl: './productsparent.component.html',
  styleUrl: './productsparent.component.css',
})
export class ProductsparentComponent {
  listFilterdValue: string = 'All';
  cart: Iproduct[] = [];
  initialCart: number = 1;
  getCartItem(recivedProdcut: Iproduct) {
    if (this.cart.includes(recivedProdcut)) {
      recivedProdcut.cartQuantity += 1;
    } else {
      recivedProdcut.cartQuantity = this.initialCart;
      this.cart.push(recivedProdcut);
    }
  }
  totalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.cartQuantity,
      0
    );
  }
}
