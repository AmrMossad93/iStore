import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CartService} from "../../Services/Cart/cart.service";
import {ApolloQueryResult} from "@apollo/client/core";
import {ICart} from "../../Model/Interface/Cart/cart";

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<ApolloQueryResult<ICart>> {
  constructor(private cartService: CartService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApolloQueryResult<ICart>> {
    return this.cartService.getCartList()
  }
}
