import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductsService } from './../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  constructor(private router: Router, private prodServi: ProductsService) {}
  products: Iproducts[] = [] as Iproducts[];
  productId: string = '' as string;
  ngOnInit(): void {
    // console.log('Inside ngOnInit');

    this.prodServi.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
    });
  }
  deleteProd(id: string) {
    this.prodServi.deleteProduct(id).subscribe({
      next: (data) => {
        console.log(data);
        this.products = this.products.filter((product) => product.id !== id);
      },
    });
  }
}
