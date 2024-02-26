import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  productList: Iproduct[] = [
    {
      id: 1,
      name: 'gray shoes',
      quantity: 4,
      price: 20,
      img: 'assets/img1.jpg',
      categoryID: '1',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 2,
      name: 'huawei watch',
      quantity: 6,
      price: 100,
      img: 'assets/img2.jpg',
      categoryID: '2',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 3,
      name: 'acqua',
      quantity: 10,
      price: 50,
      img: 'assets/img3.jpg',
      categoryID: '3',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 4,
      name: 'apple watch',
      quantity: 1,
      price: 90,
      img: 'assets/img4.jpg',
      categoryID: '2',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 5,
      name: 'black shoes',
      quantity: 3,
      price: 40,
      img: 'assets/img5.jpg',
      categoryID: '1',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 6,
      name: 'blue shoes',
      quantity: 7,
      price: 30,
      img: 'assets/img6.jpg',
      categoryID: '1',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 7,
      name: 'dolce',
      quantity: 9,
      price: 60,
      img: 'assets/img7.jpg',
      categoryID: '3',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 8,
      name: 'fossil',
      quantity: 0,
      price: 70,
      img: 'assets/img8.jpg',
      categoryID: '2',
      isPurshased: false,
      cartQuantity: 0,
    },
  ];
  constructor() {}
  getProductsDetails(id: number): Iproduct | undefined {
    return this.productList.find((product) => product.id == id);
  }
  getAllProducts(): Iproduct[] {
    return this.productList;
  }
  getProductByCat(catId: string) {
    return this.productList.filter((item) => item.categoryID === catId);
  }
}
