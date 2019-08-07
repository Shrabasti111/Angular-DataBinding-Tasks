import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent {

  constructor() { }

  @Output() recieveData = new EventEmitter<string>();
  public dataRecieved = ""; 
  
  sendData(data) {
    this.dataRecieved = data;
    this.recieveData.emit(this.dataRecieved);
  }

}
