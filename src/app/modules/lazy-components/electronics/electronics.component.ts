import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/products/get-products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: [
    './electronics.component.css',
    '../../../app.component.css' 
  ]
})
export class ElectronicsComponent implements OnInit {

  list:any;

  constructor(
    private _pService:GetProductsService
  ) { }

  ngOnInit(): void {
    this._pService.getProducts("electronics")
      .subscribe(products => {
        this.list = products;
      })
  }


}
