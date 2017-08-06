import { Injectable } from '@angular/core';
 import{Http,Response, Headers, RequestOptions}from '@angular/http';
 import'rxjs/add/operator/map';

 
@Injectable()
export class MyService {

 constructor(private http: Http) {}

fetchData(){
  return this.http.get('https://conduit.productionready.io/api/profiles/eric')
  .map((response)=>response.json()
  ).subscribe(
    (data)=>console.log(data)
   )

 }
 
fetchInfo(){
  return this.http.get('assets/info.json')
  .map((response)=>response.json()
  ).subscribe(
    (data)=>console.log(data)
   )

 }


}
