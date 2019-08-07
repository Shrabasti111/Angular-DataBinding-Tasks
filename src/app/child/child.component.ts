import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

  @Output() textData = new EventEmitter<string>();

  public dataEntered = "";

  giveText(data) {
    this.dataEntered = data;
    this.textData.emit(this.dataEntered);

  }

}
