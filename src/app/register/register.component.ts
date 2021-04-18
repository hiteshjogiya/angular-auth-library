import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signup:FormGroup;
  constructor(private _authService:AuthService,private _router:Router) { 
    this.signup = new FormGroup({
      uname: new FormControl(null,[Validators.required,Validators.email]),
      pswd: new FormControl(null,[Validators.minLength(4),Validators.required])
    });
    
  }

  success(){
    alert("Successfully Registered");
    
  }


  

  

  
  onSubmit(){
     console.log(this.signup.value);
    this._authService.register(this.signup.value).subscribe((res:any)=>{
      console.log(res);
      this._router.navigate(['/login']);
    });
  }
  ngOnInit(): void {
  }

}
