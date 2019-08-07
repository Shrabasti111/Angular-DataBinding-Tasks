import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scenario5';

  public dataRecieved = "";

  finalPrint($event) {
    this.dataRecieved = $event;
  }
}
