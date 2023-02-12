import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AppserviceService } from '../appservice.service';

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
  constructor(
    public fb: AngularFireDatabase,
    public service: AppserviceService
  ) {}
  ngOnInit() {
    this.fb
      .object('set/time1')
      .valueChanges()
      .subscribe((value: any) => {
        this.timestart1 = value.split('-')[0].split(',')[0];
        this.timeend1 = value.split('-')[0].split(',')[1];
        this.status_sw1 = value.split('-')[0].split(',')[2];
      });

    this.fb
      .object('set/time2')
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);

        this.timestart2 = value.split(',')[0];
        this.timeend2 = value.split(',')[1];
        this.status_sw2 = value.split(',')[2];
      });
    this.fb
      .object('set/time3')
      .valueChanges()
      .subscribe((value: any) => {
        this.time1 = value.split(',')[0];
        this.status_sw3 = value.split(',')[1];
      });
    this.fb
      .object('set/time4')
      .valueChanges()
      .subscribe((value: any) => {
        this.time2 = value.split(',')[0];
        this.status_sw4 = value.split(',')[1];
      });
  }
  public _setToggle1 = () => {
    this.fb
      .object('set/time1')
      .set(`${this.timestart1},${this.timeend1},${this.status_sw1}`)
      .then(() => {
        this.service.publish(
          `/time1`,
          `${this.timestart1},${this.timeend1},${
            this.status_sw1 == true ? '1' : '0'
          }`
        );
      });
  };
  public _setToggle2 = () => {
    this.fb
      .object('set/time2')
      .set(`${this.timestart2},${this.timeend2},${this.status_sw2}`)
      .then(() => {
        this.service.publish(
          `/time2`,
          `${this.timestart2},${this.timeend2},${
            this.status_sw2 == true ? '1' : '0'
          }`
        );
      });
  };
  public _setToggle3 = () => {
    this.fb
      .object('set/time3')
      .set(`${this.time1},${this.status_sw3}`)
      .then(() => {
        this.service.publish(
          `/time3`,
          `${this.time1},${
            this.status_sw3 == true ? '1' : '0'
          }`
        );
      });
  };
  public _setToggle4 = () => {
    this.fb
      .object('set/time4')
      .set(`${this.time1},${this.status_sw4}`)
      .then(() => {
        this.service.publish(
          `/time4`,
          `${this.time2},${
            this.status_sw4 == true ? '1' : '0'
          }`
        );
      });
  };
  public _setting1 = () => {
    this.fb
      .object('set/time1')
      .set(`${this.timestart1},${this.timeend1},${this.status_sw1}`)
      .then(() => {
        this.service.publish(
          `/time1`,
          `${this.timestart1},${this.timeend1},${
            this.status_sw1 == true ? '1' : '0'
          }`
        );
      });
  };
  public _setting2 = () => {
    this.fb
      .object('set/time2')
      .set(`${this.timestart2},${this.timeend2},${this.status_sw2}`)
      .then(() => {
        this.service.publish(
          `/time2`,
          `${this.timestart2},${this.timeend2},${
            this.status_sw2 == true ? '1' : '0'
          }`
        );
      });
  };
  public _setting3 = () => {
    this.fb
      .object('set/time3')
      .set(`${this.time1},${this.status_sw3}`)
      .then(() => {
        this.service.publish(
          `/time3`,
          `${this.time1},${
            this.status_sw3 == true ? '1' : '0'
          }`
        );
      });
  };
  public _setting4 = () => {
    this.fb
      .object('set/time4')
      .set(`${this.time2},${this.status_sw4}`)
      .then(() => {
        this.service.publish(
          `/time4`,
          `${this.time2},${
            this.status_sw4 == true ? '1' : '0'
          }`
        );
      });
  };
}
