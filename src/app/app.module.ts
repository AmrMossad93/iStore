import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorsProviders} from "./Core/Interceptors";
import {NgxSpinnerModule} from "ngx-spinner";
import { GraphQLModule } from './Core/Models/GraphQL/graphql.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    GraphQLModule,
  ],
  providers: [
    httpInterceptorsProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
