import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SListPageRoutingModule } from './slist-routing.module';

import { SListPage } from './slist.page';
import { ViewerPage } from '../viewer/viewer.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SListPageRoutingModule
  ],
  declarations: [SListPage, ViewerPage],
  entryComponents: [ViewerPage],
})
export class SListPageModule {}
