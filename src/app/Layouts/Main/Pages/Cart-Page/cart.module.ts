import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './Components/cart/cart.component';
import {WidgetsModule} from "../../../../Widgets/widgets.module";
import {AngularMaterialModule} from "../../../../Core/DesignModules/angular-material.module";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    WidgetsModule,
    AngularMaterialModule
  ]
})
export class CartModule { }
