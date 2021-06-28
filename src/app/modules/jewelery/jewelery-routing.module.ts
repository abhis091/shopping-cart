import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeweleryComponent } from '../lazy-components/jewelery/jewelery.component';

const routes: Routes = [
  {
    path:'',
    component:JeweleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JeweleryRoutingModule { }
