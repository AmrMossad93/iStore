import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {SnackBarService} from "../../Services/SnackBar/snack-bar.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackBarService: SnackBarService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            // This is client side error
            errorMsg = `Error: ${error.error.message}`;
          } else {
            // This is server side error
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          this.snackBarService.openSnackBar(errorMsg, 'Error Happened')
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
