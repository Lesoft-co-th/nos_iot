import { Injectable, OnInit } from '@angular/core';
const Microgear: any = window;
var microgear = Microgear.Microgear.create({
  key: 'WGidGKiep1oiiGT',
  secret: 'LAyyKZRiM4CcoWdsgfvEsthBR',
  alias: 'Ionic' /*  optional  */,
});
@Injectable({
  providedIn: 'root',
})
export class AppserviceService implements OnInit {
  public status_con: any;
  constructor() {
    microgear.connect('waterpumpRMUTI');

    microgear.on('connected', () => {
      microgear.subscribe("/waterpumpRMUTI/+");

      
    });
    this.present()
   
  }
  ngOnInit(): void {
    this.present()
    throw new Error('Method not implemented.');
  }

  public present = () => {
    microgear.on('present', (event: any) => {
      this.status_con = String(event.type);
    });
    return this.status_con;
  };
  message = (value: any) => {
    microgear.on('message', (topic: any, msg: any) => {
      value({ topic: topic, message: msg });

    
    });
  };

  publish = (topic: any, message: any) => {
    console.log("/waterpumpRMUTI" +topic);
    
    microgear.publish('/waterpumpRMUTI' + topic, message);
  };
}
