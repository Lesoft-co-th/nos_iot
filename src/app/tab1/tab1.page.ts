import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

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
  constructor(public fb: AngularFireDatabase) {
    this.fb
      .object('set/value')
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);
        this.Volt = value.split(',')[0];
        this.Amp = value.split(',')[1];
        this.water = value.split(',')[2];
      });
    this.fb
      .object('con')
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);
        if (value == 1) {
          this.con = true;
        } else {
          this.con = false;
        }
      });
  }

  public openPumpwater = () => {};
}
