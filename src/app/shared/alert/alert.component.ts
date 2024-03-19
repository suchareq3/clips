import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  //default, but can be overridden by the input
  @Input() color = 'blue';

  get bgColor() {
    return `bg-${this.color}-400`
  }
}
