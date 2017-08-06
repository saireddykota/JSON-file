import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import{MyService} from'./my.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     HttpModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
