import { Component } from '@angular/core';
import {Child1Component} from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scenario6';
  public textdata: string = "";
  printText(value) {

    this.textdata = value;
  }

}
