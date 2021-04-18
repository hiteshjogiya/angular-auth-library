import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   constructor(private _authservice:AuthService){}     

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authToken = this._authservice.getaccesstoken();
        req = req.clone({
            setHeaders:{
                Authorization: 'Bearer '+authToken
            }
        });
        return next.handle(req);
    }

}