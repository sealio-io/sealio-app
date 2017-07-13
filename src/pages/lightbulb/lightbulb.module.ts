import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LightbulbPage } from './lightbulb';

@NgModule({
  declarations: [
    LightbulbPage,
  ],
  imports: [
    IonicPageModule.forChild(LightbulbPage),
  ],
  exports: [
    LightbulbPage
  ]
})
export class LightbulbPageModule {}
