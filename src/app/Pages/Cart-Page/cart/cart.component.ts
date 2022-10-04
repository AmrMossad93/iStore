import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApolloQueryResult} from "@apollo/client/core";
import {ICart} from "../../../Widgets/Model/Interface/Cart/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList = {} as ApolloQueryResult<ICart>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.cartList = res['cartList'];
      console.log(this.cartList)
    })
  }

}
