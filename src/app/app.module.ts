import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { PrimengCompsComponent } from './primeng-comps/primeng-comps.component'
import { DemoComponent } from './demo.component';
import { LoginComponent } from './auth/login/login.component';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { MaterialModule } from './shared/materia.module';




@NgModule({
  declarations: [
    AppComponent,
    PrimengCompsComponent,
    DemoComponent,
    LoginComponent,
    AngularMaterialComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [provideAnimations(),
      // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
