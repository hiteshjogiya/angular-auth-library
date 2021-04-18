import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

 // onSubmit(){
    
  //  alert("Your Username is: "+this.loginForm.get('email')?.value);
    
  //}

  

  constructor(private _authService:AuthService) {
    this.loginForm = new FormGroup({
      uname: new FormControl(null,[Validators.required,Validators.email]),
      pswd: new FormControl(null,[Validators.minLength(4),Validators.required,Validators.maxLength(8)]),

    })
   }
   loginUser(){
     console.log(this.loginForm.value);
    this._authService.login(this.loginForm.value);
   }


  ngOnInit(): void {
  }

}
