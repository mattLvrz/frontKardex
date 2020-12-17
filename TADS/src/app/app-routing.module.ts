import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent} from './home/home/home.component'
import  {LoginComponent} from './login/login/login.component'
import  {ProductComponent} from './home/product/product.component'
import  {MoveComponent} from './home/move/move.component'
import  {KardexComponent} from './home/kardex/kardex.component'


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
  ,
  {
    path: 'home/addProduct',
    component: ProductComponent,
  }
  ,
  {
    path: 'home/move',
    component: MoveComponent,
  }
  ,
  {
    path: 'home/kardex',
    component: KardexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
