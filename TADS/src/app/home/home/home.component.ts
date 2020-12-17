import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/core/models/producto.model';
import {StoreServiceService} from '../../core/service/store-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProduct:any = [] ;
  seleccionado:Producto;  
  constructor(  private storeServiceService: StoreServiceService) {

   //servico de busqueda de movimientos.

   }

  ngOnInit(): void {
    console.log("actulizo home2");
    this.seleccionado= null;
    this.storeServiceService.getbaseService().traerProductos()   
      .subscribe((data: {} ) => {     
      debugger;
      if(data!= null){        
        this.listProduct= data;        
      }         
    });

  }


  onClickRedirect(url:string , obj:any) {
      debugger;
  //  this.router.navigate([`${link.split('?')[0]}`], { queryParams: {id: 37, username: 'jimmy'}});
      if(obj==null){
        this.storeServiceService.serviceRedirect(url);  
      }else{
        switch(url) { 
          case "/home/move": {             
              this.storeServiceService.serviceRedirectParams(url, obj);
             break; 
          }  
          case "/home/kardex": {             
            this.storeServiceService.serviceRedirectParams(url, obj);
           break; 
         }           
          default: { 
            
             break; 
          } 
       } 
       



      }
   
  }



  onClickEditarProducto(  selectProducto: any ) {
    debugger;
    console.log(selectProducto);
    this.storeServiceService.getbaseService().eliminarProducto(selectProducto.id)  
    .subscribe((data:{}) => { 
      this.seleccionado= null;
      this.listProduct.splice(this.listProduct.findIndex(i => i.id === selectProducto.id), 1);       
    });

  }
}
