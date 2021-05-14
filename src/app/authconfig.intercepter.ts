import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   constructor(private _authservice:AuthService){}   


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        this._authservice.isLoading.next(true);
        const authToken = this._authservice.getaccesstoken();
        req = req.clone({
            setHeaders:{
                Authorization: 'Bearer '+authToken
            }
        });
        return next.handle(req).pipe(
            map((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse){
                    console.log("res");
                    this._authservice.isLoading.next(false);
                }
                return event;

            })
        );
    }

}