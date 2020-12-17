import { Component, OnInit } from '@angular/core';
import {StoreServiceService} from '../../core/service/store-service.service'
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login : any = {};
  searchText: string = " ";
  token : any = [];
  constructor(   private storeServiceService: StoreServiceService) {


   }

  ngOnInit(): void {    
   console.log('Login open ');

   debugger;     
  }

  onClickIniciarLogin() {  
    this.storeServiceService.getStore().clear();
    this.storeServiceService.getbaseService().loginProject(this.login)
        .subscribe((data: {}) => {     
          debugger;
          if(data== null){
            alert("Credenciales rechazadas. ");
          }else{
            this.token = data;
            /*  let datosJwt=jwt_decode(this.token.jwt);
              console.log(datosJwt);*/
              this.storeServiceService.getStore().setObject('auth_token', this.token.jwt);
              this.storeServiceService.serviceRedirect('/home');   
          }
             
        });
  }



}
