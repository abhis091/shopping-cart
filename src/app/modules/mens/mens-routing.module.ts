import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensClothingComponent } from '../lazy-components/mens-clothing/mens-clothing.component';

const routes: Routes = [
  {
    path:'',
    component:MensClothingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensRoutingModule { }
