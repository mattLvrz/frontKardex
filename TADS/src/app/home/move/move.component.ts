import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {StoreServiceService} from '../../core/service/store-service.service';
import { Movimiento } from 'src/app/core/models/movimiento.model';


@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {


  listMovimientos:any = [] ;
  movimientoForm:Movimiento= new Movimiento();
  selectedMovimiento = "";
  producto:any={};

  constructor(private storeServiceService: StoreServiceService,
    private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.movimientoForm.tipo ="E";
    this.selectedMovimiento = "";
    const queryParamMap = this.activatedRoute.snapshot['queryParamMap'];
    console.log()
    debugger;
    this.producto.id =queryParamMap['params'].id; 
    this.producto.nombre=queryParamMap['params'].nombre;   
    this.producto.stockActual=queryParamMap['params'].stockActual;  
    console.log(this.producto);
      var idProducto = Number(this.producto.id).toString();
      this.storeServiceService.getbaseService().traerMovimientosByIdProducto(idProducto )   
      .subscribe((data: {} ) => {     
      debugger;
      if(data!= null){        
        this.listMovimientos= data;  
        console.log(data)    ;  
      }         
    });




  }

  onClickGuardar() {
      if((parseInt(this.producto.stockActual, 10)<=0 || 
        parseInt(this.producto.stockActual, 10)-this.movimientoForm.cantidadUnidad <=0 )
        && this.movimientoForm.tipo=='S'){
        alert("No hay suficiente stock para realizar el movimiento");
      }else{
        if(this.selectedMovimiento==""){
          this.movimientoForm.idProducto=  Number(this.producto.id);
          console.log(this.movimientoForm);
          this.movimientoForm.fechaCreacion = new Date().getTime().toString();
          console.log(this.producto);
            this.storeServiceService.getbaseService().crearMovimiento(this.movimientoForm)
            .subscribe((data:{}) => {         
              this.storeServiceService.serviceRedirect('/home'); 
              this.selectedMovimiento="";
              
          }); 
        }else{

          this.storeServiceService.getbaseService().actualizarMovimiento(this.movimientoForm)
          .subscribe((data:{}) => {            
            this.listMovimientos.splice(
            this.listMovimientos.findIndex(i => i.idMovimiento === this.movimientoForm.idMovimiento),
                1,
                this.movimientoForm);
            this.movimientoForm  = new Movimiento();
            var num = new Number(data); 
            this.selectedMovimiento="";  
            this.producto.stockActual=num.toString();     
        }); 
        }
               
      }
  }




  onClickActualizar( movimiento:any) {  

    this.movimientoForm = movimiento;
    this.selectedMovimiento="S";
    
  }

  onClickCancelarActualizar() {  

    this.movimientoForm  = new Movimiento();
    this.selectedMovimiento="";
    
  }


  onClickEliminar( movimiento:any) {   
      this.storeServiceService.getbaseService().eliminarMovimiento(movimiento.idMovimiento)
      .subscribe((data:{}) => {         
        this.listMovimientos.splice(this.listMovimientos.findIndex(i => i.idMovimiento === movimiento.idMovimiento), 1);  
            var num = new Number(data); 
            this.selectedMovimiento="";  
            this.producto.stockActual=num.toString();  
   
      });     
  }





  onClickCancelar() {
      this.storeServiceService.serviceRedirect('/home');
   
  }

}
