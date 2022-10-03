import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {

  constructor(private apollo: Apollo) {
  }

  get(): any {
    this.apollo.query({
      query: gql`
        query getCarts($limit: Int, $offset: Int, $consumerEmail: String){
            totalItems
            totalPages
            carts {
              catalogue {
                id
                id
              }
              consumer {
                id
                name
                email
              }
              cartItems {
                product {
                  id
                }
              }
            }
          }
      `,
      variables: {
        filter: {limit: 10, offset: 0, consumerEmail: "karim@gmail.com"}
      }
    }).subscribe(res => {
      console.log(res)
    })
  }
}
