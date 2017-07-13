import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HobbyPage } from './hobby';

@NgModule({
  declarations: [
    HobbyPage,
  ],
  imports: [
    IonicPageModule.forChild(HobbyPage),
  ],
  exports: [
    HobbyPage
  ]
})
export class HobbyPageModule {}
