import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApolloQueryResult} from "@apollo/client/core";
import {ICart} from "../../Model/Interface/cart";
import {CartService} from "../../Service/cart.service";
import {map} from "rxjs";

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
    })
  }

}
