import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './Components/cart/cart.component';
import {SharedModule} from "../../../../Shared/shared.module";
import {AngularMaterialModule} from "../../../../Core/Modules/DesignModules/angular-material.module";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class CartModule { }
