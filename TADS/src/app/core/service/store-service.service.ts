import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import{Login} from '../models/login.model'
import { Router } from '@angular/router';
import {BaseServiceeService} from '../../core/service/base-servicee.service'





import { of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor( private baseServiceeService :BaseServiceeService, private router: Router) {
    console.log('Se inicia service- StoreServiceService');
   }

   getStore(){
      return {
      set: function(key, value) {
        window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return window.localStorage[key] || defaultValue || false;
      },
      setObject: function(key, value) {
        window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key, defaultValue) {
        if(window.localStorage[key] != undefined){
            return JSON.parse(window.localStorage[key]);
        }else{
          return defaultValue || false;
        }
      },
      remove: function(key){
        window.localStorage.removeItem(key);
      },
      clear: function(){
        window.localStorage.clear();
      }
    }
  }



  serviceRedirect(url:string) {
    debugger;
  //  this.router.navigate([`${link.split('?')[0]}`], { queryParams: {id: 37, username: 'jimmy'}});
    this.router.navigate([url]);  
  }
  serviceRedirectParams(url:string , obj:any) {
    debugger;  
    this.router.navigate([url], { queryParams: obj});  
  }



  getbaseService() {
    return this.baseServiceeService;  
  }








   
}
