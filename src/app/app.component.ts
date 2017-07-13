import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BlogPage } from '../pages/blog/blog';
import { HomePage } from '../pages/home/home';
import { HobbyPage } from '../pages/hobby/hobby';
import { EntrepreneurPage } from '../pages/entrepreneur/entrepreneur';
import { LightbulbPage } from '../pages/lightbulb/lightbulb';
import { RatePage } from '../pages/rate/rate';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Hobby', component: HobbyPage },
      { title: 'Blog', component: BlogPage },
      { title:'Entrepreneur', component: EntrepreneurPage },
      {title:'Lightbulb', component: LightbulbPage},
      {title:'Rate', component: RatePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
