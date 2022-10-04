import {QueryOptions} from "@apollo/client/core";
import {gql} from "apollo-angular";

export const GET_CARTS: QueryOptions = {
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
}
