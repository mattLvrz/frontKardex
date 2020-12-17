import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module'
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule ,
    LoginModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {
 

 }


}
