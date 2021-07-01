import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/classFiles/item';
import { User } from 'src/app/classFiles/user';
import { GetOrderService } from 'src/app/services/get-order/get-order.service';
import { LoginService } from 'src/app/services/login/login.service';
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
    private _pService:GetProductsService,
    private _lService: LoginService,
    private _orderService: GetOrderService
  ) { }

  ngOnInit(): void {
    this._pService.getProducts("electronics")
      .subscribe(products => {
        this.list = products;
      })
  }

  isLoggedIn(){
    if(this._lService.isLoggedIn()){
      return true;
    }
    return false;
  }

  isAdmin(){
    return this._lService.isAdmin();
  }

  addItem(item:Item){
    this._orderService.addItemToCart(item);
    alert("Item added to Cart");
  }

}
