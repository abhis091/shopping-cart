import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/classFiles/item';
import { GetOrderService } from 'src/app/services/get-order/get-order.service';
import { LoginService } from 'src/app/services/login/login.service';
import { GetProductsService } from 'src/app/services/products/get-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:any;
  itemName:string='';

  constructor(
    private _pService:GetProductsService,
    private _lService: LoginService,
    private _orderService: GetOrderService
  ) { }

  ngOnInit(): void {
    this._pService.getAllProducts()
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

  searchItem(){
    
    let mainList = this.list;
    let tempList:any = [];
    this.list.forEach((item:Item) => {
      if(item.title.includes(this.itemName)){
        // alert(this.itemName);
        tempList.push(item);
      }
    });
    this.list = tempList;
    if(this.itemName=='')
      this.list = mainList;
  }

  addItem(item:Item){
    this._orderService.addItemToCart(item);
    alert("Item added to Cart");
  }


}
