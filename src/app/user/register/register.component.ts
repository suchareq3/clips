import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from '../validators/register-validators';
import { EmailTaken } from '../validators/email-taken';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private auth: AuthService,
    private emailTaken: EmailTaken
    ) {}

  submitInProgress = false

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ], [this.emailTaken.validate])
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m)
  ])
  confirm_password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m)
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(11),
  ])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  }, [RegisterValidators.match('password', 'confirm_password')])

  //default values, to be updated by functions like register()
  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';

  async register() {
    //console.log('register called')
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
    this.submitInProgress = true;
    
    try {
      this.auth.createUser(this.registerForm.value as IUser)
    } catch (e) {
      console.error(e)
      this.alertMsg = 'An unexpected error occured. Please try again later.'
      this.alertColor = 'red'
      this.submitInProgress = false
      return; //stops the function from executing further
    }
    this.alertMsg = 'Your account has been created!'
    this.alertColor = 'green'

    
  }
  
}
