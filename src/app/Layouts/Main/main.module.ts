import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './Component/main/main.component';
import {WidgetsModule} from "../../Widgets/widgets.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    WidgetsModule
  ]
})
export class MainModule { }
