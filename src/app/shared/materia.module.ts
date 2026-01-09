import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatGridListModule
];

@NgModule({
  declarations: [],
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule { }