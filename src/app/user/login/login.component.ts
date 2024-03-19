import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  
  constructor(private auth: AngularFireAuth) {
  }
  
  //default values, to be updated by functions like login()
  loginInProgress = false
  showAlert = false;
  alertMsg = 'Please wait! Logging in...';
  alertColor = 'blue';

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Logging in...';
    this.alertColor = 'blue';
    this.loginInProgress = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, 
        this.credentials.password
        )
    } catch(e){
      this.alertMsg = 'An unexpected error occured. Please try again later.'
      this.alertColor = 'red'
      this.loginInProgress = false
    }
    this.alertMsg = 'You are now logged in!'
    this.alertColor = 'green'
  }

}
