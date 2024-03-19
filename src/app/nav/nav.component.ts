import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  openModal($event: Event){
    //prevents the default behavior of clicking links, relevant when handling 'a' elements
    //in this example, we prevent the changing of the URL. 
    //this keeps the url tidy, and makes sure users will never be unexpectedly redirected to a different page.
    $event.preventDefault();

    //for now, this is used for the login/register button
    //the hardcoded 'auth' value matches the ModalID values found in auth-modal & modal components
    this.modal.toggleModal('auth');
  }

  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
    ){

  }

  async logout($event: Event) {
    // clicks on 'a' elements can refresh the page - this prevents that behavior
    $event.preventDefault();

    await this.afAuth.signOut()
  }

}
