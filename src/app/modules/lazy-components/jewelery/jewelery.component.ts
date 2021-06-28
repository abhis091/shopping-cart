import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/products/get-products.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: [
    './jewelery.component.css',
    '../../../app.component.css' 
  ]
})
export class JeweleryComponent implements OnInit {

  list:any;

  constructor(
    private _pService:GetProductsService
  ) { }

  ngOnInit(): void {
    this._pService.getProducts("jewelery")
      .subscribe(products => {
        this.list = products;
      })
  }

}
