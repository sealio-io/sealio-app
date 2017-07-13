import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LightbulbPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lightbulb',
  templateUrl: 'lightbulb.html',
})
export class LightbulbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LightbulbPage');
  }

  switchLightBulb(){
  	let lightBulb = document.getElementById('lightBulb') as HTMLImageElement;
  	console.log('functions works');
    if (lightBulb.src === "https://nabil-khalil-scla.herokuapp.com/images/lightOff.png"){
      lightBulb.src="https://nabil-khalil-scla.herokuapp.com/images/lightOn.png";
    }
 
    else if (lightBulb.src === "https://nabil-khalil-scla.herokuapp.com/images/lightOn.png")
      lightBulb.src="https://nabil-khalil-scla.herokuapp.com/images/lightOff.png";
    }

  }




