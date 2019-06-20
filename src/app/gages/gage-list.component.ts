import { Gage } from './models/gage.model';
import { GageService } from './services/gage.service';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-gage-list',
  template: `
    <ul>
      <li *ngFor="let gage of list"><app-gage [desc]="gage.desc"></app-gage></li>
    </ul>
  `,
  styles: [
    ``
  ]
})
export class GageListComponent implements OnInit {

  list: Gage[];

  constructor(private gageService: GageService) {}

  ngOnInit() {
    this.list = this.gageService.gages;
  }

}
