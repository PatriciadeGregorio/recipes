import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Here, we should manage request headers. For example, authoritation token for login or request errors.
    return next.handle(req);
  }
}
