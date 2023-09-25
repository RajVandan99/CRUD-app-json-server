import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const authToken = 'Bearer here take a Auth Token from loocalStoage';
   const authRequest = req.clone({
    setHeaders:{
      'Authorization': authToken,
      'Content-Type': 'application/json'
    }
   })
   return next.handle(authRequest);
  }
}
