import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public Volt = 0;
  public Amp = 0;
  public water = 0;
  public con: any;
  public status_sw: any = false;
  constructor(
    public fb: AngularFireDatabase,
    public service: AppserviceService
  ) {
    this.service.message((val: any) => {
      console.log(val);
      
      if (val.topic === '/waterpumpRMUTI/waterpumpRMUTI/sensor') {
      
        this.Volt = val.message.split(',')[0];
        this.Amp = val.message.split(',')[1];
        this.water = val.message.split(',')[2];
      }
    });
  }

  public openPumpwater = () => {
    console.log(this.status_sw);

    this.service.publish(`/Pump`, `${this.status_sw == true ? '1' : '0'}`);
  };
}
