import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaidmPage } from './saidm.page'

const routes: Routes = [
  {
    path: '',
    component: SaidmPage
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaidmPageRoutingModule {}
