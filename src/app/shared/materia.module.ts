import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule { }