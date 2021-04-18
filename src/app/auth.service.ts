import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://hiteshbookapi-auth.herokuapp.com/api/";
  
  constructor(private _http:HttpClient,private _router:Router) { }

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  register(user:any):Observable<any>{
    return this._http.post(this.url+"register",user);

  }
  login(user:any){
    return this._http.post<any>(this.url+"login",user)
    .subscribe((res:any)=>{
      if(res==null){
        console.log("null");

      }
      else{
        console.log(res);
      }
      localStorage.setItem("access-token",res.token);
      this._router.navigate(["/book"]);
    })

  }
  isloggedIn():boolean{
    let authtoken = localStorage.getItem('access-token');
    return (authtoken)!=null?true:false;
  }
  logout(){
    if(localStorage.removeItem('access-token')==null){
      this._router.navigate(["/login"]);
    }
  }
  getbook():Observable<any>{
    return this._http.get(this.url+"books");
  }
  getaccesstoken(){
    return localStorage.getItem("access-token");
  }
}
