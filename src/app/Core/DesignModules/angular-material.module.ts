import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';



const angularMaterial = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatExpansionModule
]

@NgModule({
  declarations: [],
  imports: [
    angularMaterial
  ],
  exports: [
    angularMaterial
  ]
})
export class AngularMaterialModule {
}
