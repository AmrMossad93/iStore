import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {ApolloQueryResult, QueryOptions} from "@apollo/client/core";
import {MutationOptions, MutationResult} from "apollo-angular/types";
import {Observable} from 'rxjs';

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
}
