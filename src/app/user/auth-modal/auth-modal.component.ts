import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent {
  
  constructor (public modal: ModalService) {
    //register() will allow us to register a new modal w/ our service
    //1 argument - the new modal's ID
    this.modal.register('auth');
    //this.modal.register('test');
    //NOTE: bug! for some reason, .register() only works if it matches the FIRST <app-modal>'s ID from the auth-modal template
  }

}
