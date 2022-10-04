import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {CatalogueResolver} from "../../../Widgets/Resolvers/Catalogue/catalogue.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      cataloguesList: CatalogueResolver
    },
    children: [
      {
        path: '',
        loadChildren: () => import('../../../Pages/Home-Page/home-page.module').then(module => module.HomePageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../../../Pages/Products-Page/products.module').then(module => module.ProductsModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../../../Pages/Cart-Page/cart.module').then(module => module.CartModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
