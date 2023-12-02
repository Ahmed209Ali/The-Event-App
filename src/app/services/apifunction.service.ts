import { Router } from '@angular/router';
import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApifunctionService<A> {


  constructor(@Inject(String) public URL :string,public http:HttpClient,public router:Router ) {}
get():Observable<A>{
  return this.http.get<A>(this.URL);
}
post(ojc:any):Observable<A>{
  return this.http.post<A>(this.URL,ojc)
}
delete(id :any):Observable<A>{
  return this.http.delete<A>(this.URL+`/${id}`)
}

put(id :any,ojc:any):Observable<A>{
  return this.http.put<A>(this.URL+`/${id}`,ojc)
}
gitbyid(id:any):Observable<A>{
  return this.http.get<A>(this.URL+`/${id}`);
}
all(){
  if(localStorage.getItem("admin")){}

else{
this.router.navigateByUrl("admin/user/login")
}

}



}
