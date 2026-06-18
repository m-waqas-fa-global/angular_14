import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengCompsComponent } from './primeng-comps/primeng-comps.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';

const routes: Routes = [
      {     
            path: '',
            redirectTo:"about",
            pathMatch:"full"
      },
      {
       path:"login",
       component:LoginComponent,
      //  outlet:"primaryOutlet"
     },
     {
       path:"home",
       component:PrimengCompsComponent,
      //  outlet:"primaryOutlet"
     },
      {
       path:"about",
       component:AboutComponent,
      //  outlet:"primaryOutlet"
     },
     {
      path:"angular-material",
      component:AngularMaterialComponent,
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
