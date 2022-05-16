import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss']
})
export class ReasonComponent implements OnInit {

  @Input() reasonName: string | null = null;
  @Input() description: string | null = null;
  @Input() icon: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
