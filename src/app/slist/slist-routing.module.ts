import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SListPage } from './slist.page';

const routes: Routes = [
  {
    path: '',
    component: SListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SListPageRoutingModule {}
