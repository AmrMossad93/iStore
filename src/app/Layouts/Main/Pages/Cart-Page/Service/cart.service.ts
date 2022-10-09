import {Injectable} from '@angular/core';
import {GraphQLService} from "../../../../../Core/Services/GraphQL/graph-ql.service";
import {GET_CARTS, GET_NEW_CARTS} from "../Model/Query/GetCarts";
import {Observable} from 'rxjs';
import {ApolloQueryResult} from "@apollo/client/core";
import {ICart} from "../Model/Interface/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private graphQLService: GraphQLService) {
  }

  getCartList(): Observable<ApolloQueryResult<ICart>> {
    return this.graphQLService.get(GET_CARTS);
  }

  getNewCartList(): Observable<ApolloQueryResult<ICart>> {
    let filter = {
      filter:{limit: 10, offset: 0, consumerEmail: "karim@gmail.com"}
    }
    return this.graphQLService.getWithParams(GET_NEW_CARTS, filter)
  }
}
