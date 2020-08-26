import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

// Interceptor to set the authorization token inside the request header

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Your interceptor request ', req);
    const token = localStorage.getItem('token');
    let modifiedHeader: any;
    if (token) {
       modifiedHeader = req.clone(
        {headers: req.headers.append('authorization', token)}
      );
    } else {
      modifiedHeader = req;
    }


    return next.handle(modifiedHeader);
  }

}
