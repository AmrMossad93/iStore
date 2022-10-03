import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductResolver} from "../../Widgets/Resolvers/Product/product.resolver";

const routes: Routes = [
  {
    path: ':catalogueId',
    component: ProductsListComponent,
    resolve: {
      productList: ProductResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
