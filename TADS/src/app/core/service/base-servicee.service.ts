import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import{Login} from '../models/login.model'
import{Producto} from '../models/producto.model'
import{Movimiento} from '../models/movimiento.model'

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceeService {  

  // esto deberia estar en un objeto unico en environments
  // por ser una demo se a dejado en variables unitarias
  apiURL = 'http://10.95.1.50:8080'; 
  urlProducto='/PipeCode/producto/';
  urlMovimiento='/PipeCode/movimiento/';
  urlKardex='/PipeCode/kardex/';

  constructor( private http: HttpClient,) {
    console.log('Se inicia service- baseService');
   }



loginProject(login): Observable<Login> {
  debugger;
  
  return this.http.post<Login>(this.apiURL + '/PipeCode/login', JSON.stringify(login),this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


prueba(){
  debugger;
  return this.http.get('https://10.95.1.50:8181/PipeCode')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}




// producto service . Se desarrolla todo en un mismo servicio por cuestiones de tiempos. Se deberia  crear distintos ts

crearProducto(Producto): Observable<Producto> {
  return this.http.post<Producto>(this.apiURL + this.urlProducto, JSON.stringify(Producto),this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

actualizarProducto(Producto): Observable<Producto> {
  return this.http.patch<Producto>(this.apiURL + this.urlProducto, JSON.stringify(Producto),this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

eliminarProducto(idProducto : String){
  return this.http.patch(this.apiURL + this.urlProducto+idProducto, JSON.stringify("B"),this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

traerProductos(){
  debugger;
  return this.http.get(this.apiURL + this.urlProducto,this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}



traerProducto(idProducto){
  debugger;
  return this.http.get(this.apiURL + this.urlProducto+idProducto,this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}



// Movimiento service . Se desarrolla todo en un mismo servicio por cuestiones de tiempos. Se deberia  crear distintos ts

crearMovimiento(Movimiento): Observable<Movimiento> {
  return this.http.post<Movimiento>(this.apiURL + this.urlMovimiento, JSON.stringify(Movimiento),this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

traerMovimientos(){
  debugger;
  return this.http.get(this.apiURL + this.urlMovimiento,this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

traerMovimientosByIdProducto(idProducto){
  debugger;
  return this.http.get(this.apiURL +  this.urlMovimiento+"producto/"+idProducto,this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


traerMovimiento(idMovimiento){
  debugger;
  return this.http.get(this.apiURL +  this.urlMovimiento+idMovimiento,this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


actualizarMovimiento(Movimiento): Observable<Movimiento> {
  return this.http.patch<Movimiento>(this.apiURL +  this.urlMovimiento, JSON.stringify(Movimiento),this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


eliminarMovimiento(idMovimiento : number){
  return this.http.patch(this.apiURL +  this.urlMovimiento+idMovimiento, JSON.stringify("B"),this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}




traerKardexByIdProducto(idProducto){
  debugger;
  return this.http.get(this.apiURL +  this.urlKardex+idProducto,this.httpOptions())
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}






httpOptions(){
  var tk="";
  if(window.localStorage['auth_token'] != undefined){
    tk= 'Bearer ' + JSON.parse(window.localStorage['auth_token']);
  }
  var  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' :tk 
      })    
    }
    return httpOptions;
}




// Error handling
handleError(error) {
  console.log(error);
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else { 
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}
