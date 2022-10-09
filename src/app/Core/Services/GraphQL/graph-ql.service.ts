import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {ApolloQueryResult, QueryOptions} from "@apollo/client/core";
import {MutationOptions, MutationResult} from "apollo-angular/types";
import {Observable} from 'rxjs';
import {DocumentNode} from "graphql";
import {OperationVariables} from "@apollo/client/core/types";

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {

  constructor(private apollo: Apollo) {
  }

  get(query: QueryOptions): Observable<ApolloQueryResult<any>> {
    return this.apollo.query(query)
  }

  post(query: MutationOptions): Observable<MutationResult<any>> {
    return this.apollo.mutate(query)
  }

  getWithParams(query: DocumentNode, variables: OperationVariables): Observable<any> {
    return this.apollo.watchQuery({query, variables}).valueChanges;
  }
}
