import { CommonModule } from '@angular/common';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BoxShadowDirective } from '../../directives/box-shadow.directive';
import { Iproduct } from '../../models/iproduct';
import { FormatCreditPipe } from '../../pipes/format-credit.pipe';
import { GetProductsService } from '../../services/get-products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BoxShadowDirective,
    FormatCreditPipe,
    RouterModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productList: Iproduct[] = [];
  productListFilter: Iproduct[] = [];

  clientName: string = 'Mahmoud';
  birthDay = new Date();
  creditCard: string = '123243253560';
  constructor(private prodServi: GetProductsService) {}
  //getAllProduct from service
  ngOnInit(): void {
    this.productList = this.prodServi.getAllProducts();
    this.productListFilter = this.productList;
  }

  @Input() set listFilterdValue(value: string) {
    this.productListFilter = this.productsFilter(value);
  }
  @Output() addchildEvent: EventEmitter<Iproduct> =
    new EventEmitter<Iproduct>();
  //filter from service
  productsFilter(value: string) {
    if (value === 'All') {
      return this.productList;
    } else {
      return this.prodServi.getProductByCat(value);
    }
  }
  toggleBtn(id: number) {
    const product = this.productList.find((item) => item.id === id);
    if (product) {
      product.isPurshased = !product.isPurshased;
      product.quantity = product.quantity - 1;
    }
  }

  addToCart(prod: Iproduct) {
    // event emit
    this.addchildEvent.emit(prod);
  }
}
