import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

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
  RegisterComponent
]