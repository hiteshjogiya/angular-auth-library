import { Injectable } from '@angular/core';
import {book} from './book/book';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CruddataService {

  url="https://hiteshbook.herokuapp.com/api/books";

  constructor(private _http:HttpClient) { }
  addcrud():Observable<book>{
    return this._http.get<book>(this.url);

  }
  addBook(data:any):Observable<book>{
    return this._http.post<book>(this.url,data);
  }
  updatedata(onedata:any):Observable<book>{
    return this._http.patch<book>("https://hiteshbook.herokuapp.com/api/books/"+onedata._id,onedata);
  }
  deletedata(onedata:any):Observable<book>{
    return this._http.delete<book>("https://hiteshbook.herokuapp.com/api/books/"+onedata._id);
  }

  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterby:String){
    this._listners.next(filterby);
  }
}
