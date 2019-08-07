import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scenario4';

  public dataToBePrinted = "";

  printingData($event) {
    this.dataToBePrinted = $event;
    console.log($event);
  }
}
