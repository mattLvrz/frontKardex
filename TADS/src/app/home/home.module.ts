import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { KardexComponent } from './kardex/kardex.component';
import { MoveComponent } from './move/move.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, ProductComponent, KardexComponent, MoveComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [HomeComponent ]
})
export class HomeModule { }
