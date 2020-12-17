import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.model';
import {StoreServiceService} from '../../core/service/store-service.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productoForm:Producto;  
  
  token : any = [];
 
  constructor( private storeServiceService: StoreServiceService) { 

  }

  ngOnInit(): void {
    this.token =this.storeServiceService.getStore().get('auth_token',null);
    if (this.token==null){
     this.storeServiceService.serviceRedirect('/');
    }
    this.productoForm=  new Producto(); 
  }

  onClickGuardar() {
   debugger; 
   this.productoForm.id=0;
   this.productoForm.stockActual=0;
   console.log(this.productoForm);
   this.storeServiceService.getbaseService().crearProducto(this.productoForm)  
      .subscribe((data:{}) => {         
        this.productoForm=  new Producto();  
        this.storeServiceService.serviceRedirect('/home');       
      });
  }

  onClickCancelar() {
       this.storeServiceService.serviceRedirect('/home');   
  }





  
  
}
