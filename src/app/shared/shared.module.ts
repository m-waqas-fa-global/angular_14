import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CurrancypPipe } from './custom-comp/currancyp.pipe';
import { BtnStylingDirective } from './Directive/btn-styling.directive';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    CurrancypPipe,
    BtnStylingDirective,
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardComponent
  ]
})
export class SharedModule { }
