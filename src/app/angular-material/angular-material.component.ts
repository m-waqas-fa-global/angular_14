import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.scss'],
})
export class AngularMaterialComponent implements OnInit {

  constructor() { }
  // loginForm!:FormGroup;

  ngOnInit(): void {}

  formSubmit() {
    console.log('Form submitted',this.loginForm);
  }

  loginForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required])
  });
  
}
