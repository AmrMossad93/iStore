import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from "./Components/products-list/products-list.component";
import {ProductResolver} from "./Resolver/product.resolver";

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
