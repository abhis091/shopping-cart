import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/products/get-products.service';

@Component({
  selector: 'app-womens-clothing',
  templateUrl: './womens-clothing.component.html',
  styleUrls: [
    './womens-clothing.component.css',
    '../../../app.component.css'
  ]
})
export class WomensClothingComponent implements OnInit {

  list:any;

  constructor(
    private _pService:GetProductsService
  ) { }

  ngOnInit(): void {
    this._pService.getProducts("women's clothing")
      .subscribe(products => {
        this.list = products;
      })
  }

}
