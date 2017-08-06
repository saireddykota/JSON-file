import { Component } from '@angular/core';
 import{ MyService} from './my.service';
 import{Http,Response}from '@angular/http';
 import'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  constructor(private newService:MyService){}

    ngOnInit(){
      this.newService.fetchData();
      this.newService.fetchInfo(); 
    }
   
   /* bookName='';
searchBooks(){
  this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=b02a71feefc4e03aec524630084f0c9c&q=' + this.bookName )
  .subscribe(
    (res:Response)=>{
    const books =res.json();
    console.log(books);
  })
}*/
/* constructor(private http:Http){}
fetchData(){
  return this.http.get("src/data/info.json").map(
  (response)=>response.json()
  ).subscribe(
    (data)=>console.log(data))

 }*/
}