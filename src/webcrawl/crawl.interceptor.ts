import { HttpInterceptorFn } from '@angular/common/http';

export const crawlInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            console.log('Request succeeded:', event);
          }
        },
        error: (error: HttpErrorResponse) => {
          // Log and alert the error
          console.error('Request failed:', error);
          alert(`Error: ${error.message}\nStatus Code: ${error.status}`);
        },
      })
    );
  }
}
