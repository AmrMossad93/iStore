import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoaderInterceptor} from "./Loader/loader.interceptor";

export const httpInterceptorsProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
]
