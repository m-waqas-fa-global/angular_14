import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-app';
  onActivate(component: any) {
   console.log('Activated component:', component);
  }
  onDeactivate(component: any) {
  console.log('Component removed:', component);
  }
} 
