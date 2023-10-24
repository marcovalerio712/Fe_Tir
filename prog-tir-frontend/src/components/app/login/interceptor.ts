import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            request = request.clone({
                
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        console.log(request)
        return next.handle(request);
    }
}
