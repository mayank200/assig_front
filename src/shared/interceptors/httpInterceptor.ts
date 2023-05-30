import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, retry, catchError, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class httpInterceptor implements HttpInterceptor {
    
    constructor(private router: Router) {   }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var loadingContainer1: HTMLElement = document.getElementsByClassName('main').item(0) as HTMLElement;
        var loadingContainer: HTMLElement = document.getElementsByClassName('loader').item(0) as HTMLElement;
        var routerMain:HTMLElement = document.getElementById('router-main') as HTMLElement;
        loadingContainer1.style.display = 'inline-grid';
        loadingContainer.style.display = 'block';
        routerMain.classList.add('no-click');
        if (routerMain != null) {
            routerMain.style.filter = 'blur(2px)';
        }
        const token: string = localStorage.getItem('activeUser');
        // console.log(token);
         if (token) {
            let session_obj:any = JSON.parse(localStorage.getItem('activeUser'));
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + session_obj.token) });
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe(
            delay(1000),
            retry(2),
            finalize(() => {
                loadingContainer1.style.display = 'none';
                loadingContainer.style.display = 'none';
                routerMain.classList.remove('no-click');
                routerMain.style.filter =null;
            }),
            catchError((error: HttpErrorResponse) => {
                loadingContainer1.style.display = 'none';
                loadingContainer.style.display = 'none';
                if (error.status == 401) {
                  // 401 handled in auth.interceptor
                  //this.toastr.error(error.message);
                  localStorage.removeItem('activetUser');
                  this.router.navigate(['/logout']);      
                }
                return throwError(error);
              })
        );
    }
}