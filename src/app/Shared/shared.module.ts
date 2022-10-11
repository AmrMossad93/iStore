import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {AngularMaterialModule} from "../Core/Modules/DesignModules/angular-material.module";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CardComponent} from './Components/card/card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule {
}
