import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {environment} from 'src/environments/environment';
import {ApolloLink} from 'apollo-link';
import {onError} from 'apollo-link-error';
import {setContext} from 'apollo-link-context';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryCache, DefaultOptions} from '@apollo/client/core';

//options
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

// url
let uri = `${environment.apiEndPoint}/graphql`

// if (!environment.production) {
//   uri = `${environment.API_BASE_URL}/graphql`; // <-- add the URL of the GraphQL server here
// }
export function provideApollo(httpLink: HttpLink,) {


  const link = ApolloLink.from([httpLink.create({uri})]);
  const cache = new InMemoryCache({addTypename: false});

  return {
    link,
    cache,
    defaultOptions
  }
}


const link = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
});


@NgModule({
  exports: [
    HttpClientModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: provideApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}
