import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../../services/get-products.service';
import { Iproduct } from './../../models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  singleProduct!: Iproduct;

  constructor(
    private prodService: GetProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let prodId = Number(this.route.snapshot.paramMap.get('id'));
    this.singleProduct = this.prodService.getProductsDetails(prodId)!;
    console.log(this.singleProduct);
  }
}
