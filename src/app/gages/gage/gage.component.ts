import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gage',
  templateUrl: './gage.component.html',
  styleUrls: ['./gage.component.scss']
})
export class GageComponent implements OnInit {

  @Input() desc: string;

  constructor() { }

  ngOnInit() {
  }

}
