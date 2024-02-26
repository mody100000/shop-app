import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodServi: ProductsService
  ) {}
  products: Iproducts = {} as Iproducts;
  isUpdateMode = false;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.isUpdateMode = params['updateMode'] === 'true';

      if (this.isUpdateMode) {
        this.prodServi.getAllProducts().subscribe({
          next: (data) => {
            console.log(data);
          },
        });
      } else {
        this.prodServi.getProductById(this.productId).subscribe({
          next: (data) => {
            this.products = data;
          },
        });
      }
    });
  }
  // addOrUpdateProd() {
  //   if (this.isUpdateMode) {
  //     this.updateProduct();
  //   } else {
  //     this.addProd();
  //   }
  // }
  // //task1

  // // prod1: Iproducts = {
  // //   id: 2,
  // //   name: 'testProd',
  // //   price: 25,
  // //   category: 'testCat',
  // // };
  // addProd() {
  //   this.prodServi.creatProduct(this.products).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.redirectToOrder();
  //     },
  //   });
  // }
  // updateProduct() {
  //   this.prodServi.updateProduct(this.products.id, this.products).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.redirectToOrder();
  //     },
  //   });
  // }
  addOrUpdateProd() {
    if (this.isUpdateMode) {
      this.updateProduct();
    } else {
      this.addProd();
    }
  }

  addProd() {
    this.prodServi.creatProduct(this.products).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToOrder();
      },
    });
  }

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
