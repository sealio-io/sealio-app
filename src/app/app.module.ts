import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BlogPage } from '../pages/blog/blog';
import { HobbyPage } from '../pages/hobby/hobby';
import { EntrepreneurPage } from '../pages/entrepreneur/entrepreneur';
import { LightbulbPage } from '../pages/lightbulb/lightbulb';
import { RatePage } from '../pages/rate/rate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlogPage,
    HobbyPage,
    LightbulbPage,
    RatePage,
    EntrepreneurPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlogPage,
    HobbyPage,
    RatePage,
    LightbulbPage,
    EntrepreneurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
