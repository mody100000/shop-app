import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { OrderComponent } from '../components/order/order.component';
import { ProductComponent } from '../components/product/product.component';
import { ProductsparentComponent } from '../components/productsparent/productsparent.component';
import { ProductsComponent } from './../components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProductComponent,
    ProductsparentComponent,
    FooterComponent,
    ProductsComponent,
    OrderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  title = 'lab6project';
}
