import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/classFiles/item';
import { GetOrderService } from 'src/app/services/get-order/get-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  date = new Date().toDateString();
  list:any;
  totalAmount:number=0;
  discount:number=0;
  gst:number=0;
  grandTotal:number=0;

  constructor(
    private _orderService:GetOrderService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.list = this._orderService.getCart();
    
    if(this.list){
      this.list.forEach((item:Item) => {
        this.totalAmount+=item.total;
      });
      this.discount = this.totalAmount*0.1;
      this.gst = this.totalAmount * 0.18;
      this.grandTotal = this.totalAmount - this.discount + this.gst;
      this._orderService.grandTotal = this.grandTotal;
      console.log(this.list);
    }
  }

  confirmOrder(){
    this._router.navigate(['/payment']);
  }

  cancelOrder(){
    let val = confirm("All cart items will be cleared.\nDo you want to cancel Order?");
    if(val){
      localStorage.removeItem("cart");
      location.reload();
    }
  }


}
