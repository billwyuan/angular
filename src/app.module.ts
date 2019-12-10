import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/components/demo.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TableOverviewExample} from './app/components/table/table-overview-example';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule,  } from 'angularfire2';

import {AppComponent} from './app/app.component';


import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCBOsGIW7ROLqxXM5mMPQGgIWZvXu0upLI",
      authDomain: "fir-dev-1b700.firebaseapp.com",
      databaseURL: "https://fir-dev-1b700.firebaseio.com",
      projectId: "fir-dev-1b700",
      storageBucket: "fir-dev-1b700.appspot.com",
      messagingSenderId: "465839380093",
      appId: "1:465839380093:web:375bbf70267044f6a18314",
      measurementId: "G-9KTEH943XG"
    }),
  ],

  entryComponents: [AppComponent],
  declarations: [AppComponent ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */