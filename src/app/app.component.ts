import { Component } from '@angular/core';
import {Car} from "./interfaces/car.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Training';
  car: Car = {
    color: 'red',
    serialNumber: 12345
  };

  onChangedTest(newText: string) {
    console.log(newText);
    this.title = newText;
  }
}
