import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

  @Output() finalDataSend = new EventEmitter<String>();
  public finalSentData = "";

  sendingData($event) {
    this.finalSentData = $event;
    this.finalDataSend.emit(this.finalSentData);
  }

}
