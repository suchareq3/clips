import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  //by setting this to 'private', we prevent other components from accessing it
  //by keeping it 'private', it'll be easier to debug/track where changes are made to this property
  //we won't have to search through dozens of files to find where it might be being changed
  //HOWEVER, setting this to 'private' means we have to create a method for returning its value.
  //like a getter/setter type-a thing, yanno?
  private visible = false

  isModalOpen() {
    return this.visible;
  }

  toggleModal() {
    this.visible = !this.visible
  }

  constructor() { }

  
}
