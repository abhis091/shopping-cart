import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOrderService } from 'src/app/services/get-order/get-order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amountToPay:number = 0;

  constructor(private _orderService:GetOrderService,private _router:Router) { }

  ngOnInit(): void {
    this.amountToPay = this._orderService.grandTotal;
  }

  pay(){
    alert("Payment Done\nThanks For Shopping...Visit Again");
    localStorage.removeItem('cart');
    this._router.navigate(['/home']);
  }

}
