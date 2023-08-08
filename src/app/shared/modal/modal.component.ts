import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //providers: [ModalService]
})

export class ModalComponent {

  @Input() modalID = '';

  constructor(public modal: ModalService){
    //console.log("KG testing1: " + modal.visible);
  }

  //not necessary to create, but calling a 'closeModal()' function in the HTML template 
  //just looks tidier than calling a 'modal.toggleModal()' function
  closeModal(){
    this.modal.toggleModal(this.modalID);
  }
}
