import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {BaseServiceeService} from '../core/service/base-servicee.service'
import {StoreServiceService} from '../core/service/store-service.service'





@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BaseServiceeService,
    StoreServiceService
  ]
})
export class LoginModule { }
