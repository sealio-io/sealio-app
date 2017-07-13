import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }

    showLike() {
    let alert = this.alertCtrl.create({
      title: 'Like!',
      subTitle: 'Your like has been saved',
      buttons: ['OK']
    });
    alert.present();
  }


    showDislike() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your dislike has been saved... you cactus.',
      buttons: ['OK']
    });
    alert.present();
  }

}
