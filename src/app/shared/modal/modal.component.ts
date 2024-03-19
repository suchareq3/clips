import { Component, Input, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //providers: [ModalService]
})

export class ModalComponent implements OnInit, OnDestroy{

  @Input() modalID = '';

  constructor(public modal: ModalService, public eleRef: ElementRef){
    //console.log(eleRef);
  }

  ngOnInit(): void {
    //WARNING: this not only appends, but it literally MOVES the whole element to the child position of 'body'.
    document.body.appendChild(this.eleRef.nativeElement);
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.eleRef.nativeElement);
  }

  //not necessary to create, but calling a 'closeModal()' function in the HTML template 
  //just looks tidier than calling a 'modal.toggleModal()' function
  closeModal(){
    this.modal.toggleModal(this.modalID);
  }
}
