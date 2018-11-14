import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input()
  value = '';

  @Output()
  onClicked = new EventEmitter();

  handleClick() {
    this.onClicked.emit();
  }

}
