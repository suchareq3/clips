import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //using an object here isn't necessary - it just looks neat uwu
  credentials = {
    email: '',
    password: ''
  }

  login() {
    console.log(this.credentials);
  }

}
