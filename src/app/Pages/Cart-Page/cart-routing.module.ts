import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {CartResolver} from "../../Widgets/Resolvers/Cart/cart.resolver";

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    resolve: {
      cartList: CartResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
