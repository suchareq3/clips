import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

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

    this.modal.toggleModal();
  }

  constructor(public modal: ModalService){

  }

}
