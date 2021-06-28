import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomensClothingComponent } from '../lazy-components/womens-clothing/womens-clothing.component';

const routes: Routes = [
  {
    path:'',
    component:WomensClothingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomensRoutingModule { }
