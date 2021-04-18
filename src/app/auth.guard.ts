import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authservice:AuthService,private _router:Router){}
 // canActivate(
 //   route: ActivatedRouteSnapshot,
 //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 //   return true;
 // }
 canActivate():boolean{
   if(this._authservice.isloggedIn()!==true){
     window.alert("Access not allowed without login");
     this._router.navigate(['/login']);

   }
   return true;
 }
  
}
