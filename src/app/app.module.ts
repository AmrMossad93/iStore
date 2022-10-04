import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorsProviders} from "./Core/Interceptors";
import {NgxSpinnerModule} from "ngx-spinner";
import { GraphQLModule } from './Core/Models/GraphQL/graphql.module';
import {Apollo} from "apollo-angular";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";
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
    Apollo,
    MatSnackBar,
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
