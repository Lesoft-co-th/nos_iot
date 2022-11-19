import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  time1_1 = new Date().toISOString();
  time1_2 = new Date().toISOString();
  time2_1 = new Date().toISOString();
  time2_2 = new Date().toISOString();
  constructor() {}
  public _setTime1 = (path: any, data: any) => {};
}
