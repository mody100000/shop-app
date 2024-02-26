import { Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { AboutComponent } from './../components/about/about.component';
import { ContactUsComponent } from './../components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './../components/product-details/product-details.component';
import { NotFoundComponent } from './../components/not-found/not-found.component';
import { ProductsparentComponent } from './../components/productsparent/productsparent.component';
import { WishListComponent } from './../components/wish-list/wish-list.component';
import { AdminComponent } from './../components/admin/admin.component';
import { InsertproductComponent } from './../components/insertproduct/insertproduct.component';
import { ProductsComponent } from './../components/products/products.component';
import { OrderComponent } from './../components/order/order.component';
import { UpdateProdComponent } from './../components/update-prod/update-prod.component';
import { RegisterComponent } from './../components/register/register.component';
import { userGuard } from '../Guards/user.guard';
import { LoginComponent } from './../components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsparentComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'wish', component: WishListComponent },
  { path: 'prods/:id', component: ProductsComponent },
  { path: 'prods', component: ProductsComponent },
  { path: 'updateProd/:id', component: UpdateProdComponent },
  { path: 'order', component: OrderComponent, canActivate: [userGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'inserproduct', component: InsertproductComponent }],
  },
  //  wild card route
  { path: '**', component: NotFoundComponent },
];
