import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../interfaces/car.interface";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() text: string = 'Default';
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() car: Car | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
