import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  /*//by setting this to 'private', we prevent other components from accessing it
  //by keeping it 'private', it'll be easier to debug/track where changes are made to this property
  //we won't have to search through dozens of files to find where it might be being changed
  //HOWEVER, setting this to 'private' means we have to create a method for returning its value.
  //like a getter/setter type-a thing, yanno?
  private visible = false*/

  private modals: IModal[] = []

  isModalOpen(id: string) : boolean {
    //This line of code is not compatible because its type is "boolean | undefined"
    //return this.modals.find(element => element.id === id)?.visible

    //We have 2 options to fix this: 
    //1) return !!this.modals.find(element => element.id === id)?.visible
    //2) return Boolean(this.modals.find(element => element.id === id)?.visible)
    //  #1 works because ! also converts the value to a boolean. (clever! but it kinda looks weird! me no likey!)
    
    return Boolean(this.modals.find(element => element.id === id)?.visible)

    //NOTE: the "?" means we're using TypeScript's OPTIONAL CHAINING
    //NOTE: basically, if the .find() function does not return an object...
    //NOTE: *the line of code will STOP at the question mark!* (pretty cool, huh?)
  }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id)

    if (modal) {
      modal.visible = !modal.visible;
    }
    //this.visible = !this.visible
  }

  register(id: string) {
    this.modals.push({
      
      /*typing "id" like this all on its own is equivalent to 
          id: id,
        or
          "id" : id*/
      id,
      visible: false
    })
  }

  unregister(id: string) {

    //console.log("KG before: " + "..." + JSON.stringify(this.modals))
    this.modals = this.modals.filter(
      (element) => {
        console.log("KG checking: " + JSON.stringify(element.id !== id));
        element.id !== id 
      }
    )
    //console.log("KG after: " + this.modals);

    //id = 'auth'
    //array = [auth, bibi, cabu]
    //auth !== auth
  }

  constructor() { }

  
}
