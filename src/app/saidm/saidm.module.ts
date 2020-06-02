import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaidmPageRoutingModule } from './saidm-routing.module';

import { SaidmPage } from './saidm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaidmPageRoutingModule
  ],
  declarations: [SaidmPage]
})
export class SaidmPageModule {}
