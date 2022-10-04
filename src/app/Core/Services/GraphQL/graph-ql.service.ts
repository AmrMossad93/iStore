import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {GET_CARTS} from "../../Models/GraphQL/Queries/GetCarts";
import {ApolloQueryResult, QueryOptions} from "@apollo/client/core";

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {

  constructor(private apollo: Apollo) {
  }

  get(query: QueryOptions): any {
    return this.apollo.query(query)
  }
}
