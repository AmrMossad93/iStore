import {QueryOptions} from "@apollo/client/core";
import {gql} from "apollo-angular";

export const GET_CARTS: QueryOptions = {
  query: gql`
    query  getCarts($filter:  CartFilter) {
      getCarts(filter: $filter) {
        totalItems
        totalPages
        carts {
          catalogue {
            id
            nameEn
          }
          consumer {
            id
            name
            email
          }
          cartItems {
            product {
              id
              name
            }
          }
        }
      }
    }
  `,
  variables: {
    filter: {limit: 10, offset: 0, consumerEmail: "bawadi@ejada.com"}
  }
}
