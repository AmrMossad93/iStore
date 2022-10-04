import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoaderInterceptor} from "./Loader/loader.interceptor";
import {ErrorInterceptor} from "./Error/error.interceptor";

export const httpInterceptorsProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
]
