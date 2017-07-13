import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrepreneurPage } from './entrepreneur';

@NgModule({
  declarations: [
    EntrepreneurPage,
  ],
  imports: [
    IonicPageModule.forChild(EntrepreneurPage),
  ],
  exports: [
    EntrepreneurPage
  ]
})
export class EntrepreneurPageModule {}
