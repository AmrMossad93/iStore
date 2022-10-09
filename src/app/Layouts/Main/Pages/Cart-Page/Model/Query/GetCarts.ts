import {QueryOptions} from "@apollo/client/core";
import {gql} from "apollo-angular";
import {DocumentNode} from "graphql";

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
    filter: {limit: 10, offset: 0, consumerEmail: "karim@gmail.com"}
  }
}
export const GET_NEW_CARTS: DocumentNode = gql`
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
`
