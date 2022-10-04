import {Component, OnInit} from '@angular/core';
import {GraphQLService} from "../../../Core/Services/GraphQL/graph-ql.service";
import {GET_CARTS} from "../../../Core/Models/GraphQL/Queries/GetCarts";
import {CartService} from "../../../Widgets/Services/Cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCartList().subscribe(res => {
      console.log(res.data.getCarts.carts)
    })
  }

}
