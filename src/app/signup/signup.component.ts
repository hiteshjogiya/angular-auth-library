import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruddataService } from '../cruddata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


 book={
    bookname:"",
    qty:"",
    author:"",
    address:""

  }
 

  onsubmit(bookform:any){
    console.log(bookform.value);
    this._cruddata.addBook(bookform.value).subscribe((res:any)=>{
     console.log(res);
    })
    this._router.navigate(["/book"]);
  }

  constructor(private _cruddata:CruddataService,private _router:Router) { }

  ngOnInit(): void {
  }

}
