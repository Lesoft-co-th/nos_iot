import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDeFhMvh_EnNBOFlirOM0pb9tgei8vbmUw',
  authDomain: 'meter-water.firebaseapp.com',
  projectId: 'meter-water',
  storageBucket: 'meter-water.appspot.com',
  messagingSenderId: '720206916237',
  appId: '1:720206916237:web:21ebc6c84ae6ebc59b90c4',
  measurementId: 'G-S5JESS7HJK',
  databaseURL:
    'https://meter-water-default-rtdb.asia-southeast1.firebasedatabase.app/',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
