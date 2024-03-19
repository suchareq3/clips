import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  //the value for this WILL be overwritten by the @Input decorator, though we still need a simple, empty 'new FormControl()'...
  //..here, because TS will complain otherwise. 
  @Input() control: FormControl = new FormControl();
  @Input() type = 'text';
  @Input() placeholder = '';
  //by setting the (default!) value to an empty string, ngx-mask won't work (by default!). this makes input masking optional.
  @Input() format = '';

  constructor() {

  }

  ngOnInit(): void {
      
  }
}
