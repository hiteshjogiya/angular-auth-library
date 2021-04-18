import { Component, OnInit } from '@angular/core';
import { CruddataService } from '../cruddata.service';
import Swal from 'sweetalert2';
import  { Router } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _cruddata:CruddataService,private _router:Router) {
    this._cruddata.listen().subscribe((m:any)=>{
      console.log(m);
      this.getdata();
    })
    }
 
  data:any=[];
  p=0;
  title="";

  searchname(){
    if(this.title!=""){
      this.data= this.data.filter((res:any)=>{
        return res.name.match(this.title);
      });
    }
    else{
      this.getdata();
    }
  }

  edit(onedata:any){
    onedata.isEdit=true;
  }
  update(onedata:any){
    console.log(onedata);
    this._cruddata.updatedata(onedata).subscribe((data)=>{
     
    });
    onedata.isEdit=false;
  }
  cancel(onedata:any){
    onedata.isEdit=false;
  }
  delete(onedata:any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this._cruddata.deletedata(onedata).subscribe((dd)=>{
        
        });
        
        
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
         
        )
        this._cruddata.filter('Register click');
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
    /*this._cruddata.deletedata(onedata).subscribe((dd)=>{
     
     });
     
     this.ngOnInit();*/
     
  }
  getdata(){
    this._cruddata.addcrud().subscribe((res)=>{
      this.data=res;
      this.data.forEach((element: { [x: string]: boolean; }) => {
        element['isEdit']=false;
      });
     
    })
  }

  ngOnInit(): void {
    this.getdata();
  }

}
