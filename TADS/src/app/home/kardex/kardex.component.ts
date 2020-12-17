import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {StoreServiceService} from '../../core/service/store-service.service';
import { Movimiento } from 'src/app/core/models/movimiento.model';
import { Producto } from 'src/app/core/models/producto.model';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

    kardex:any=[];
    producto :any={};


  constructor(private storeServiceService: StoreServiceService,
    private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    //traer registros kardex

   // this.selectedMovimiento = "";
    const queryParamMap = this.activatedRoute.snapshot['queryParamMap'];
   // console.log()
    debugger;
    this.producto.id =queryParamMap['params'].id; 
    this.producto.nombre=queryParamMap['params'].nombre;   
    this.producto.stockActual=queryParamMap['params'].stockActual;  
    console.log(this.producto);
      var idProducto = Number(this.producto.id).toString();
      this.storeServiceService.getbaseService().traerKardexByIdProducto(idProducto)   
      .subscribe((data: {} ) => {     
      debugger;
      if(data!= null){        
        this.kardex= data;  
        console.log(data)    ;  
      }         
    });



  }




  onClickGuardar() {
   
  }

  onClickCancelar() {
this.storeServiceService.serviceRedirect('/home');
   
  }


}
