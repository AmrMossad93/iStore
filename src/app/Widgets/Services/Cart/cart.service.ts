import {Injectable} from '@angular/core';
import {GraphQLService} from "../../../Core/Services/GraphQL/graph-ql.service";
import {GET_CARTS} from "../../../Core/Models/GraphQL/Queries/GetCarts";
import {Observable} from 'rxjs';
import {ApolloQueryResult} from "@apollo/client/core";
import {ICart} from "../../Model/Interface/Cart/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private graphQLService: GraphQLService) {
  }

  getCartList(): Observable<ApolloQueryResult<ICart>> {
    return this.graphQLService.get(GET_CARTS);
  }
}
