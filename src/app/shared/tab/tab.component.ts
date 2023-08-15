import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  //this has to be public - otherwise it wont work inside of the tabs-container *ngFor loop
  //also, a not-very-important, unrelated NOTE: this string is actually the DEFAULT value! if we would request...
  //...a Tab element/component, but without providing a tabTitle, this is the value its property would be equal to.
  @Input() tabTitle = "";

  @Input() active = false;

  constructor () {}

}
