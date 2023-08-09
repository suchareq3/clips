import { Component, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnDestroy {
  
  constructor (public modal: ModalService) {
    //register() will allow us to register a new modal w/ our service
    //1 argument - the new modal's ID
    this.modal.register('auth');
    //this value is hardcoded & matches the 'modalID' property value in the auth-modal HTML template
  }

  ngOnDestroy(): void {
      this.modal.unregister('auth');
  }

}
