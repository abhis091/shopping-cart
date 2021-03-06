import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/classFiles/item';

@Injectable({
  providedIn: 'root'
})
export class GetOrderService {

  private itemList:any = new Map();
  grandTotal:number=0;
  
  constructor(private _http: HttpClient) { }

  ngOnInit(){}

  addItemToCart(item:Item){
    item.qty = 1;        
    let cart = localStorage.getItem('cart');
    if(cart){
      let Cart = JSON.parse(cart);
      Cart.forEach((i:Item) => {
        if(i.id ==  item.id){
          item.qty = i.qty + 1;
        }
      });
    }    
    item.total = item.price * item.qty;
    
    this.itemList.set(item.id,item);
    console.log(this.itemList);
    
    localStorage.setItem('cart',JSON.stringify([...this.itemList.values()]));
  }

  getCart(){
    let cart = localStorage.getItem('cart');
    if(cart){
      let Cart = JSON.parse(cart);
      return Cart;
    }
    return undefined;
    
  }
}
