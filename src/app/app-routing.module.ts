import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { ElectronicsComponent } from './modules/lazy-components/electronics/electronics.component';
import { JeweleryComponent } from './modules/lazy-components/jewelery/jewelery.component';
import { MensClothingComponent } from './modules/lazy-components/mens-clothing/mens-clothing.component';
import { PaymentComponent } from './modules/lazy-components/payment/payment.component';
import { WomensClothingComponent } from './modules/lazy-components/womens-clothing/womens-clothing.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'products/electronics',
    loadChildren: () => import('src/app/modules/electronics/electronics.module').then(m => m.ElectronicsModule)
  },
  {
    path:'products/mens',
    loadChildren: () => import('src/app/modules/mens/mens.module').then(m => m.MensModule),
  },
  {
    path:'products/womens',
    loadChildren:()=> import('src/app/modules/womens/womens.module').then(m => m.WomensModule)
  },
  {
    path:'products/jewelery',
    loadChildren: ()=> import('src/app/modules/jewelery/jewelery.module').then(m => m.JeweleryModule)
  },
  {
    path:'order',
    component:OrderComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'payment',
    loadChildren:()=>import('src/app/modules/payment/payment.module').then(m => m.PaymentModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  NavbarComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  OrderComponent,
  ElectronicsComponent,
  WomensClothingComponent,
  MensClothingComponent,
  JeweleryComponent,
  PaymentComponent
]