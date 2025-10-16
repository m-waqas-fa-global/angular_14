import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login attempt:', { username: this.username, password: this.password });
    // Add your login logic here
  }
}
