import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from './../models/iproducts';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  myHeaders = {};
  constructor(private http: HttpClient) {
    this.myHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  getAllProducts(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(`http://localhost:3000/products`);
  }
  creatProduct(prod: Iproducts): Observable<Iproducts> {
    return this.http.post<Iproducts>(
      `http://localhost:3000/products`,
      JSON.stringify(prod),
      this.myHeaders
    );
  }
  deleteProduct(id: string): Observable<Iproducts> {
    return this.http.delete<Iproducts>(
      `http://localhost:3000/products/${id}`,
      this.myHeaders
    );
  }
  updateProduct(
    id: string,
    updatedProd: Iproducts,
    params?: HttpParams
  ): Observable<Iproducts> {
    return this.http.put<Iproducts>(
      `http://localhost:3000/products/${id}`,
      updatedProd,
      { params }
    );
  }
  getProductById(prodId: string): Observable<Iproducts> {
    return this.http.get<Iproducts>(`http://localhost:3000/products/${prodId}`);
  }
}
