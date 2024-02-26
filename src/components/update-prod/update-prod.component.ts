import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-update-prod',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './update-prod.component.html',
  styleUrl: './update-prod.component.css',
})
export class UpdateProdComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodServi: ProductsService
  ) {}
  products: Iproducts = {} as Iproducts;
  productId!: string;
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];

    // Fetch the specific product details using the id
    this.prodServi.getProductById(this.productId).subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }
  //task1

  // prod1: Iproducts = {
  //   id: 2,
  //   name: 'testProd',
  //   price: 25,
  //   category: 'testCat',
  // };

  updateProduct() {
    this.prodServi.updateProduct(this.products.id, this.products).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToOrder();
      },
    });
  }
  redirectToOrder() {
    this.router.navigate(['/order']);
  }
}
