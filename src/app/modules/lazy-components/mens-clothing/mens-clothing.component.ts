import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/products/get-products.service';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: [
    './mens-clothing.component.css',
    '../../../app.component.css'
  ]
})
export class MensClothingComponent implements OnInit {

  list:any;

  constructor(
    private _pService:GetProductsService
  ) { }

  ngOnInit(): void {
    this._pService.getProducts("men's clothing")
      .subscribe(products => {
        this.list = products;
      })
  }

}
