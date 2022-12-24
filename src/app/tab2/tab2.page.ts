import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public timestart1: string = '00:00';
  public timeend1: string = '00:00';
  public status_sw1: any = false;
  public timestart2: string = '00:00';
  public timeend2: string = '00:00';
  public status_sw2: any = false;

  public time1: string = '00:00';
  public status_sw3: any = false;
  public time2: string = '00:00';
  public status_sw4: any = false;
  constructor(public fb: AngularFireDatabase) {}
  ngOnInit() {}
  public _setToggle = () => {
    console.log(this.status_sw1);
    console.log(this.status_sw2);
    console.log(this.status_sw3);
    console.log(this.status_sw4);
  };
  public _setting1 = () => {
    this.fb
      .object('time1')
      .set(`${this.timestart1},${this.timeend1},${this.status_sw1}`);
  };
  public _setting2 = () => {
    this.fb
      .object('time2')
      .set(`${this.timestart2},${this.timeend2},${this.status_sw2}`);
  };
  public _setting3 = () => {
    this.fb.object('time3').set(`${this.time1},${this.status_sw3}`);
  };
  public _setting4 = () => {
    this.fb.object('time4').set(`${this.time2},${this.status_sw4}`);
  };
}
